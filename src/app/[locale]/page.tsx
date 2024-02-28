// "use client";
import React from "react";
import { Box } from "@mui/material";

const App = () => {
  const { createStore } = require("redux");

  //state

  const initCountState = {
    count: 0,
  };

  // const initUserState = {
  //   users: [{ name: "Jueal dev" }],
  // };

  //Action --Object- type,payload
  const INCREMENT = "INCREMENT";
  const DeCREMENT = "DECREMENT";
  // const ADD_USER = "ADD_USER";

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
  // const AddUser = () => {
  //   return {
  //     type: ADD_USER,
  //     payload: { name: "Ahosan" },
  //   };
  // };

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
      default:
        state;
    }
  };

  const store = createStore(counterReducer);
  store.subscribe(() => {
    console.log(store.getState());
  });
  // dispatch action

  store.dispatch(incrementCounter());
  store.dispatch(incrementCounter());
  store.dispatch(incrementCounter());
  store.dispatch(decrementCounter());

  // 1. state
  // 2. dispatch action
  // 3. reducer
  // 4. store

  return <Box>page</Box>;
};

export default App;
