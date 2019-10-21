package com.spring.cat.app;

import com.spring.cat.app.dao.ProductRepo;
import com.spring.cat.app.entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

@SpringBootApplication
public class AppApplication implements CommandLineRunner {

    @Autowired
    private ProductRepo productRepo;
    @Autowired
    private RepositoryRestConfiguration restConfiguration;

    public static void main(String[] args) {
        SpringApplication.run(AppApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        restConfiguration.exposeIdsFor(Product.class);
        productRepo.save(new Product(null,"Ordi",7000,4));
        productRepo.save(new Product(null,"Mobile",2500,8));
        productRepo.save(new Product(null,"Cable",500,10));

       productRepo.findAll() .forEach(product -> {
           System.out.println(product.toString());
       });

    }
}
