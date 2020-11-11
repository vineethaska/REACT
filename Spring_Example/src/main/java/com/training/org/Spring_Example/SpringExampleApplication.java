package com.training.org.Spring_Example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class SpringExampleApplication {
	
	@RequestMapping("/")
	public String getMessage() {
		return "Spring.io project from Start.spring.io the vineet";
	}
	public static void main(String[] args) {
		SpringApplication.run(SpringExampleApplication.class, args);
	}

}
