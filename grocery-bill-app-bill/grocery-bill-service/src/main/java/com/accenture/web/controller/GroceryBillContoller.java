package com.accenture.web.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.accenture.web.domain.Item;
import com.accenture.web.domain.ItemResponse;

@RestController
@RequestMapping("bill")
public class GroceryBillContoller {
	@GetMapping("/total")
	public double getTotalBill() {

		RestTemplate restTemplate = new RestTemplate();

		final String fetchItemApi = "http://localhost:8082/app/item/view";
		ItemResponse groceryItemApp = restTemplate.getForObject(fetchItemApi, ItemResponse.class);
		ItemResponse regularItemsList = new ItemResponse();
		double totalBill = 0;
		for (Item item : groceryItemApp.getItemList()) {
			totalBill += item.getPrice();
		}
		return totalBill;

	}

}
