// src/components/Filters.js
import React from 'react';

const Filters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="filters">
      <select name="category" onChange={handleChange}>
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="home">Home</option>
      </select>
      <select name="company" onChange={handleChange}>
        <option value="">All Companies</option>
        <option value="company1">Company 1</option>
        <option value="company2">Company 2</option>
      </select>
      <input type="number" name="minPrice" placeholder="Min Price" onChange={handleChange} />
      <input type="number" name="maxPrice" placeholder="Max Price" onChange={handleChange} />
      <select name="rating" onChange={handleChange}>
        <option value="">All Ratings</option>
        <option value="1">1 Star & Up</option>
        <option value="2">2 Stars & Up</option>
        <option value="3">3 Stars & Up</option>
      </select>
      <select name="availability" onChange={handleChange}>
        <option value="">All</option>
        <option value="inStock">In Stock</option>
        <option value="outOfStock">Out of Stock</option>
      </select>
    </div>
  );
};

export default Filters;
