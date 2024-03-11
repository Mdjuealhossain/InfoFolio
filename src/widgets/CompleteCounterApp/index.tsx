// "use client";
import React from "react";

const CompleteCounterApp = () => {
  // state = count:0
  // action = increment,decrement,reset
  // reducer
  // store

  const { createStore } = require("redux");

  const INCREMENT = "INCREMENT";
  const DeCREMENT = "DECREMENT";
  const RESET = "RESET";

  const initCountState = {
    count: 0,
  };

  const incrementCounter = () => {
    return {
      type: INCREMENT,
    };
  };
  const decrementCounter = () => {
    return {
      type: DeCREMENT,
    };
  };
  const resetCounter = () => {
    return {
      type: RESET,
    };
  };
  //create reducer for counter

  const counterReducer = (state = initCountState, action: any) => {
    switch (action.type) {
      case INCREMENT:
        return {
          ...state,
          count: state.count + 1,
        };
      case DeCREMENT:
        return {
          ...state,
          count: state.count - 1,
        };
      case RESET:
        return {
          ...state,
          count: 0,
        };
      default:
        state;
    }
  };

  const store = createStore(counterReducer);
  store.subscribe(() => {
    console.log(store.getState());
  });

  store.dispatch(incrementCounter());
  store.dispatch(incrementCounter());
  store.dispatch(incrementCounter());
  store.dispatch(incrementCounter());
  store.dispatch(decrementCounter());
  store.dispatch(resetCounter());

  return <div>index</div>;
};

export default CompleteCounterApp;
