package com.spring.cat.app.controllers;

import com.spring.cat.app.dao.ProductRepo;
import com.spring.cat.app.entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductRestService {
    @Autowired
    private ProductRepo productRepo;

    @GetMapping(value = "/productsList")
    public List<Product> listProducts()
    {
        return productRepo.findAll();
    }

    @GetMapping(value = "/productsList/{id}")
    public Product listProducts(@PathVariable(name = "id") Long id)
    {
        return productRepo.findById(id).get();
    }

}
