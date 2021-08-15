/* eslint-disable no-case-declarations */
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartAction';

const initialState = {
  cart: [],
  products: [
    { id: 1, name: 'MacBook Pro' },
    { id: 2, name: 'Dell XPS' },
    { id: 3, name: 'HP' },
    { id: 4, name: 'Lenovo' },
    { id: 5, name: 'Samsung' },
  ],
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // const newId = action.id;
      const newItem = {
        productId: action.id,
        name: action.name,
        cartId: state.cart.length + 1,
      };
      const newCart = [...state.cart, newItem];
      return {
        // cart: [{ products: state.products }, ...state.cart, action.id],
        ...state,
        cart: newCart,
      };
    case REMOVE_FROM_CART:
      const productId = action.id;
      const remainingCart = state.cart.filter((item) => item.cartId !== productId);
      return {
        // cart: state.cart.filter((item) => item !== action.id),
        ...state,
        cart: remainingCart,
      };

    default:
      return state;
  }
};

export default cartReducers;
