// "use client";
import React from "react";

const payloadayload = () => {
  const { createStore } = require("redux");

  //   const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
  const ADD_USER = "ADD_USER";

  const initCountState = {
    users: ["jueal"],
    count: 1,
  };
  const incrementUser = (user: any) => {
    return {
      type: ADD_USER,
      payloadayload: user,
    };
  };

  //   const incrementCounterbyValue = (valu: any) => {
  //     return {
  //       type: INCREMENT_BY_VALUE,
  //       payloadayload: valu,
  //     };
  //   };

  // create reducer for counter

  const userReducer = (state = initCountState, action: any) => {
    switch (action.type) {
      //   case INCREMENT_BY_VALUE:
      //     return {
      //       ...state,
      //       count: state.count + action.payloadayload,
      //     };
      case ADD_USER:
        return {
          users: [...state.users, action.payloadayload],
          count: state.count + 1,
        };
      default:
        state;
    }
  };

  const store = createStore(userReducer);
  store.subscribe(() => {
    console.log(store.getState());
  });

  //   store.dispatch(incrementCounterbyValue(5));
  store.dispatch(incrementUser("masum1"));
  store.dispatch(incrementUser("masum2"));
  store.dispatch(incrementUser("masum3"));
  return <div>payloadayload</div>;
};

export default payloadayload;
