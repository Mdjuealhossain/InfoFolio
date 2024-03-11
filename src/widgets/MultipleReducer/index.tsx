import React from "react";
import { combineReducers, createStore } from "redux";

const MultipleReducer = () => {
  // product Reducer

  const GET_PRODUCT = "GET_PRODUCT";
  const ADD_PRODUCT = "ADD_PRODUCT";

  const initProductState = {
    products: ["salt", "sugar"],
    numberOfProduct: 2,
  };

  const getProducts = () => {
    return {
      type: GET_PRODUCT,
    };
  };
  const addProducts = (product: any) => {
    return {
      type: ADD_PRODUCT,
      payload: product,
    };
  };

  //create product reducer

  const productReducer = (state = initProductState, action: any) => {
    switch (action.type) {
      case GET_PRODUCT:
        return {
          ...state,
        };
      case ADD_PRODUCT:
        return {
          products: [...state.products, action.payload],
          numberOfProduct: state.numberOfProduct + 1,
        };

      default:
        return state;
    }
  };

  // card Reducer

  const GET_CART = "GET_CART";
  const ADD_CART = "ADD_CART";

  const initCartState = {
    cart: ["salt"],
    numberOfProduct: 1,
  };

  const getCart = () => {
    return {
      type: GET_CART,
    };
  };
  const addCart = (product: any) => {
    return {
      type: ADD_CART,
      payload: product,
    };
  };

  //create product reducer

  const cartReducer = (state = initCartState, action: any) => {
    switch (action.type) {
      case GET_CART:
        return {
          ...state,
        };
      case ADD_CART:
        return {
          products: [...state.cart, action.payload],
          numberOfProduct: state.numberOfProduct + 1,
        };

      default:
        return state;
    }
  };

  // combaine reducer

  const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer,
  });

  const store = createStore(rootReducer);

  store.subscribe(() => {
    console.log(store.getState());
  });

  store.dispatch(getProducts());
  store.dispatch(addProducts("mobile"));

  store.dispatch(getCart());
  store.dispatch(addCart("nife"));

  return <div>MultipleReducer</div>;
};

export default MultipleReducer;
