import React from "react";
import { createStore } from "redux";

const Midleware = () => {
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

  const store = createStore(productReducer);

  store.subscribe(() => {
    console.log(store.getState());
  });

  store.dispatch(getProducts());
  store.dispatch(addProducts("mobile"));

  return <div>Midleware</div>;
};

export default Midleware;
