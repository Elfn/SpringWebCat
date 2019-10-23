package com.spring.cat.app.dao;

import com.spring.cat.app.entities.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
@CrossOrigin("*")
@RepositoryRestResource
public interface ProductRepo extends CrudRepository<Product,Long>, JpaSpecificationExecutor<Product> {

    @RestResource(path="/byDescription")
    public List<Product> findByDescriptionContains(@Param("kw") String desc);

    //@Query("SELECT p FROM Product p WHERE p.description LIKE CONCAT('%',:kw,'%')")
    @RestResource(path="/byDescriptionPage")
    public Page<Product> findByDescriptionContainingIgnoreCase(@Param("kw") String desc, Pageable pageable);
}
