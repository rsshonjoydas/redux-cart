/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartAction';

const Shop = (props) => {
  const { cart, removeFromCart } = props;
  return (
    <div>
      <h4>This is Shop</h4>
      <ul>
        {cart.map((product) => (
          <li key={product.cartId}>
            {product.name}{' '}
            <button type="button" onClick={() => removeFromCart(product.cartId)}>
              X
            </button>{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  removeFromCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
