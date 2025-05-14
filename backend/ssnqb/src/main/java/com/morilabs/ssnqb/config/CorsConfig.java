package com.morilabs.ssnqb.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration  // Add this annotation to make this class a Spring configuration class
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")  // Enable CORS for all paths
                .allowedOrigins("http://localhost:5173", "http://localhost:3000")  // Allow these origins (React app URLs)
                .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE")  // Allowed HTTP methods
                .allowedHeaders("*")  // Allow any headers
                .allowCredentials(true);  // Allow credentials (cookies, authorization headers, etc.)
    }
}
