"use client";
import axios from "axios";
import React from "react";
import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";

// async function - api calling
// api url -
// midlewere - redux-thunk
// axios api

const DataFetchReduxThunk = () => {
  // constants

  const GET_TODES_REQUEST = "GET_TODES_REQUEST";
  const GET_TODES_SUCCESS = "GET_TODES_SUCCESS";
  const GET_TODES_FIELD = "GET_TODES_FIELD";

  //states
  const initTodoesState = {
    todo: [],
    isLoading: false,
    error: null,
  };
  //actions

  const getTodoesRequest = () => {
    return {
      type: GET_TODES_REQUEST,
    };
  };
  const getTodoesField = (error: any) => {
    return {
      type: GET_TODES_FIELD,
      payload: error,
    };
  };
  const getTodoesSuccess = (todoes: any) => {
    return {
      type: GET_TODES_SUCCESS,
      payload: todoes,
    };
  };

  // reducer

  const todoesReducer = (state = initTodoesState, action: any) => {
    switch (action.type) {
      case GET_TODES_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case GET_TODES_SUCCESS:
        return {
          ...state,
          isLoading: false,
          todoes: action.payload,
        };
      case GET_TODES_FIELD:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };

      default:
        return state;
    }
  };

  //async action Creator

  const fetchData = () => {
    return (dispatch: any) => {
      dispatch(getTodoesRequest());
      axios
        .get("https://jsonplaceholder.typicde.com/todos")
        .then((res) => {
          const todos = res.data.map((data: any) => data);
          dispatch(getTodoesSuccess(todos));
        })
        .catch((error) => {
          dispatch(getTodoesField(error.message));
        });
    };
  };

  // store

  const store = createStore(todoesReducer, applyMiddleware(thunk));
  store.subscribe(() => {
    console.log(store.getState());
  });

  store.dispatch(fetchData());

  return <div>DataFetch</div>;
};

export default DataFetchReduxThunk;
