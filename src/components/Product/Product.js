import React from 'react';

const Product = (props) => {
  const { product, addToCart } = props;
  return (
    <div style={{ border: '1px solid tomato' }}>
      <h5>Product: {product.name}</h5>
      <button type="button" onClick={() => addToCart(product.id)}>
        add to cart
      </button>
    </div>
  );
};
export default Product;
