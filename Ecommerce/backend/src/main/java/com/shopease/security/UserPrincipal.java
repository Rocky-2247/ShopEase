package com.shopease.security;

import com.shopease.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

@AllArgsConstructor
@Getter
public class UserPrincipal implements UserDetails {

    private final Long id;
    private final String name;
    private final String email;
    private final String password;
    private final String role;
    private final boolean isBlocked;
    private final Collection<? extends GrantedAuthority> authorities;

    public static UserPrincipal create(User user) {
        String roleName = user.getRole() != null && user.getRole().equalsIgnoreCase("admin") 
                ? "ROLE_ADMIN" 
                : "ROLE_CUSTOMER";

        return new UserPrincipal(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getPassword(),
                user.getRole(),
                Boolean.TRUE.equals(user.getIsBlocked()),
                Collections.singletonList(new SimpleGrantedAuthority(roleName))
        );
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return !isBlocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return !isBlocked;
    }
}
