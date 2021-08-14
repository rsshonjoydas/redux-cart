import React from 'react';
import Product from '../Product/Product';

const Cart = () => {
  const products = [
    { id: 1, name: 'MacBook Pro' },
    { id: 2, name: 'Dell XPS' },
    { id: 3, name: 'HP' },
    { id: 4, name: 'Lenovo' },
    { id: 5, name: 'Samsung' },
  ];
  return (
    <div>
      <h4>This is Cart</h4>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};
export default Cart;