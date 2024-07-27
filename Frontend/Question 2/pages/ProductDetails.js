// src/pages/ProductDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../api';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProductDetails = async () => {
      const data = await fetchProductDetails(id);
      setProduct(data);
    };

    getProductDetails();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
};

export default ProductDetails;
