package com.accenture.web.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ShoppingClerk {
	@Id
	private int clerkId;
	private String name;
	private String password;
	
	public ShoppingClerk() {
		
	}

	public ShoppingClerk(int clerkId, String name, String password) {
		super();
		this.clerkId = clerkId;
		this.name = name;
		this.password = password;
	}

	public int getClerkId() {
		return clerkId;
	}

	public void setClerkId(int clerkId) {
		this.clerkId = clerkId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
}
