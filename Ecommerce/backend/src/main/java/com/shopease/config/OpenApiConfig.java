package com.shopease.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI shopEaseOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("ShopEase E-Commerce REST API")
                        .description("High-Performance Java Spring Boot 3.x REST API for ShopEase Full-Stack E-Commerce Platform")
                        .version("1.0.0")
                        .contact(new Contact().name("ShopEase Engineering Team").email("support@shopease.com"))
                        .license(new License().name("ISC License")))
                .addSecurityItem(new SecurityRequirement().addList("Bearer Authentication"))
                .components(new Components()
                        .addSecuritySchemes("Bearer Authentication", new SecurityScheme()
                                .type(SecurityScheme.Type.HTTP)
                                .scheme("bearer")
                                .bearerFormat("JWT")
                                .description("Enter your JWT token in the format: Bearer <token>")));
    }
}
