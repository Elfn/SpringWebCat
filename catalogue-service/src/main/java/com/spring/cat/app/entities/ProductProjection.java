package com.spring.cat.app.entities;

import org.springframework.data.rest.core.config.Projection;
//We use it to create a custom view of our model
@Projection(name = "P1",types = Product.class)
public interface ProductProjection {

    public double getPrice();
    public String getDescription();

}
