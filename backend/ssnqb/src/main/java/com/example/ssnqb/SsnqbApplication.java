package com.example.ssnqb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class SsnqbApplication {

	public static void main(String[] args) {
		SpringApplication.run(SsnqbApplication.class, args);
	}

}


