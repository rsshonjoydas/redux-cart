import React from 'react';

const Product = ({ product }) => {
  const { name } = product;
  return (
    <div style={{ border: '1px solid tomato' }}>
      <h5>Product: {name}</h5>
      <button type="button">add to cart</button>
    </div>
  );
};
export default Product;
