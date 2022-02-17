package com.accenture.web.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Item {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int itemId;
	private String name;
	private double price;
	private boolean isDiscounted;
	private double discountPercentage;
	
	public Item() {
		
	}
	
	@Override
	public String toString() {
		return "Item [itemId=" + itemId + ", name=" + name + ", price=" + price + ", isDiscounted=" + isDiscounted
				+ ", discountPercentage=" + discountPercentage + "]";
	}

	public Item(int itemId, String name, double price, boolean isDiscounted, double discountPercentage) {
		this.itemId = itemId;
		this.name = name;
		this.price = price;
		this.isDiscounted = isDiscounted;
		this.discountPercentage = discountPercentage;
	}

	public int getItemId() {
		return itemId;
	}

	public void setItemId(int itemId) {
		this.itemId = itemId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public boolean getIsDiscounted() {
		return isDiscounted;
	}

	public void setDiscounted(boolean isDiscounted) {
		this.isDiscounted = isDiscounted;
	}

	public double getDiscountPercentage() {
		return discountPercentage;
	}

	public void setDiscountPercentage(double discountPercentage) {
		this.discountPercentage = discountPercentage;
	}
	
}
