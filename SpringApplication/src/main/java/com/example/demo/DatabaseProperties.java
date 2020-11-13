package com.example.demo;

import javax.validation.constraints.Min;
import javax.validation.constraints.Pattern;

public class DatabaseProperties {
	@Pattern(regexp = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,6}$")
	private String url;
	private String username;
	@Min(value=15,message="password is not in range")
	private String password;


	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "DatabaseProperties [url=" + url + ", username=" + username + ", password=" + password + "]";
	}




}

