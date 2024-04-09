package com.dardan.backend.cartapp.backendcartapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dardan.backend.cartapp.backendcartapp.models.entities.Product;
import com.dardan.backend.cartapp.backendcartapp.repositories.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    private ProductRepository repository;

    @Override
    public List<Product> findAll() {
        return (List<Product>)repository.findAll();
    }

}
