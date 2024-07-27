// src/pages/AllProducts.js
import React, { useState, useEffect } from 'react';
import { fetchProducts } from './api';
import ProductCard from '.src/components/ProductCard';
import Filters from '.src/components/Filters';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    minPrice: '',
    maxPrice: '',
    rating: '',
    availability: '',
  });

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts(filters.company, filters.category);
      setProducts(data);
    };

    getProducts();
  }, [filters]);

  return (
    <div className="all-products">
      <Filters filters={filters} setFilters={setFilters} />
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
