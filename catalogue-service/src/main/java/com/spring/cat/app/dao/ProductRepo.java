package com.spring.cat.app.dao;

import com.spring.cat.app.entities.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import java.util.List;

@RepositoryRestResource
public interface ProductRepo extends JpaRepository<Product,Long> {

    @RestResource(path="/byDescription")
    public List<Product> findByDescriptionContains(@Param("kw") String desc);

    @RestResource(path="/byDescriptionPage")
    public Page<Product> findByDescriptionContains(@Param("kw") String desc, Pageable pageable);
}
