# 09. Security Design, Code Review & Hardening

---

## 1. Security Architecture Overview

ShopEase implements defense-in-depth across frontend route guards, Spring Security 6 filter chains, stateless JJWT tokens, BCrypt password hashing, and multipart file upload validation.

```
+---------------------------------------------------------------------------------------------------------------+
|                                         SHOPEASE SECURITY ARCHITECTURE                                        |
+---------------------------------------------------------------------------------------------------------------+
|  1. Identity & Auth:       | Stateless JWT (JJWT 0.12.6) passed via Authorization: Bearer <token>              |
|  2. Password Encryption:   | BCryptPasswordEncoder (10 Salt Rounds) managed by Spring Security                 |
|  3. Authorization:         | Role-Based Access Control (RBAC) via Spring Security (.hasRole("ADMIN"))          |
|  4. Account Moderation:    | is_blocked flag evaluated during authentication & in UserPrincipal validation   |
|  5. Media Upload Defense:  | UploadController path sanitization, extension validation & size limits (10MB)    |
|  6. Payment Security:      | Client-side tokenization + Razorpay HMAC-SHA256 signature verification            |
+---------------------------------------------------------------------------------------------------------------+
```

---

## 2. Spring Security 6 & Token Lifecycle

### 2.1 Web Security Configuration (`config/WebSecurityConfig.java`)

```java
@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class WebSecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(10);
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            .csrf(AbstractHttpConfigurer::disable)
            .headers(headers -> headers.frameOptions(HeadersConfigurer.FrameOptionsConfig::disable)) // For H2 console
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                // Public Static & Doc Endpoints
                .requestMatchers("/", "/api/health", "/api-docs/**", "/swagger-ui/**", "/swagger-ui.html", "/h2-console/**", "/uploads/**").permitAll()
                
                // Public Auth & Webhooks
                .requestMatchers("/api/auth/**", "/api/webhooks/**").permitAll()
                
                // Public Product & Category Read Endpoints
                .requestMatchers(HttpMethod.GET, "/api/products/**", "/api/categories/**", "/api/reviews/**").permitAll()
                .requestMatchers(HttpMethod.POST, "/api/payment/validate-coupon").permitAll()
                
                // Cart Endpoints (supports both guest session & authenticated user)
                .requestMatchers("/api/cart/**").permitAll()
                
                // Admin-Only Endpoints
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.POST, "/api/products/**", "/api/categories/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.PUT, "/api/products/**", "/api/categories/**", "/api/orders/*/status").hasRole("ADMIN")
                .requestMatchers(HttpMethod.DELETE, "/api/products/**", "/api/categories/**").hasRole("ADMIN")
                .requestMatchers("/api/orders/admin/**").hasRole("ADMIN")
                
                // Protected Customer Endpoints
                .requestMatchers("/api/upload/**").authenticated()
                .anyRequest().authenticated()
            );

        http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }
}
```

### 2.2 JWT Authentication Filter (`security/JwtAuthenticationFilter.java`)

```java
@Component
@RequiredArgsConstructor
@Slf4j
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtTokenProvider tokenProvider;
    private final CustomUserDetailsService customUserDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        try {
            String jwt = getJwtFromRequest(request);

            if (StringUtils.hasText(jwt) && tokenProvider.validateToken(jwt)) {
                Long userId = tokenProvider.getUserIdFromJWT(jwt);
                UserDetails userDetails = customUserDetailsService.loadUserById(userId);

                if (userDetails != null && userDetails.isAccountNonLocked()) {
                    UsernamePasswordAuthenticationToken authentication =
                            new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                    authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                    SecurityContextHolder.getContext().setAuthentication(authentication);
                }
            }
        } catch (Exception ex) {
            log.error("Could not set user authentication in security context", ex);
        }

        filterChain.doFilter(request, response);
    }

    private String getJwtFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        // Fallback for direct browser download links (e.g. PDF invoices)
        String paramToken = request.getParameter("token");
        if (StringUtils.hasText(paramToken)) {
            return paramToken;
        }
        return null;
    }
}
```

---

## 3. Security Audit: Strengths vs. Identified Vulnerabilities

| Security Domain | Current Status in Codebase | Severity | Findings & Recommendations |
| :--- | :--- | :--- | :--- |
| **Credential Storage** | **Secure** | Low Risk | Uses Spring Security's `BCryptPasswordEncoder(10)`. Password field in `User.java` has `@JsonProperty(access = Access.WRITE_ONLY)` preventing accidental JSON serialization. |
| **RBAC / Authorization**| **Secure** | Low Risk | Configured via Spring Security URL patterns (`.hasRole("ADMIN")`) and verified by `UserPrincipal.getAuthorities()`. |
| **Account Moderation** | **Secure** | Low Risk | `is_blocked` flag is evaluated on login and in `UserPrincipal.isAccountNonLocked()`, instantly terminating blocked sessions. |
| **CORS Configuration** | **Permissive in Dev** | **Medium** | Configured with `allowedOriginPatterns("*")` in `WebSecurityConfig.java`. In production, restrict to `store.shopease.com` and `admin.shopease.com`. |
| **Brute-Force Protection**| **Missing** | **Medium** | No rate-limiting on `/api/auth/login` and `/api/auth/register`. Vulnerable to credential stuffing attacks. |
| **Token Storage** | **Client LocalStorage** | **Medium** | Frontend stores JWT tokens in `localStorage`. Vulnerable if XSS vulnerability occurs. Recommend `HttpOnly, Secure` cookies for production. |
| **File Upload Defense**| **Secure** | Low Risk | `UploadController.java` utilizes `StringUtils.cleanPath()`, generates random UUID filenames, and sanitizes dangerous characters. |

---

## 4. Production Security Hardening Recommendations

### 4.1 Rate Limiting with Bucket4j / Spring Cloud Gateway
```java
// Recommended Filter for Login Rate Limiting
@Component
public class RateLimitingFilter extends OncePerRequestFilter {
    private final Map<String, Bucket> buckets = new ConcurrentHashMap<>();

    private Bucket createNewBucket() {
        return Bucket.builder()
                .addLimit(Bandwidth.classic(10, Refill.intervally(10, Duration.ofMinutes(15))))
                .build();
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        if (request.getRequestURI().startsWith("/api/auth/login")) {
            String ip = request.getRemoteAddr();
            Bucket bucket = buckets.computeIfAbsent(ip, k -> createNewBucket());
            if (!bucket.tryConsume(1)) {
                response.setStatus(HttpStatus.TOO_MANY_REQUESTS.value());
                response.getWriter().write("{\"success\":false,\"message\":\"Too many login attempts. Please try again later.\"}");
                return;
            }
        }
        filterChain.doFilter(request, response);
    }
}
```

### 4.2 Restricting Production CORS
```java
@Bean
public CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration configuration = new CorsConfiguration();
    configuration.setAllowedOrigins(List.of("https://store.shopease.com", "https://admin.shopease.com"));
    configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
    configuration.setAllowedHeaders(List.of("Authorization", "Content-Type", "x-session-id"));
    configuration.setAllowCredentials(true);
    configuration.setMaxAge(3600L);

    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", configuration);
    return source;
}
```
