package com.spring.cat.app.controllers;

import com.spring.cat.app.dao.ProductRepo;
import com.spring.cat.app.entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
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

    @PutMapping(value = "/productsList/{id}")
    public Product update(@PathVariable(name = "id") Long id, @RequestBody Product p)
        {
            p.setId(id);
            return productRepo.save(p);
        }

    @PostMapping(value = "/productsList")
    public Product save(@RequestBody Product p){
        return productRepo.save(p);
    }

    @DeleteMapping(value = "/productsList/{id}")
    public void delete(@PathVariable(name = "id") Long id)
    {
         productRepo.deleteById(id);
    }
}
