package com.training.org;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@SpringBootApplication(scanBasePackages="com.training.component")

public class HelloWorld{
	public static void main(String[] args) {
		SpringApplication.run(HelloWorld.class, args);
	}

}