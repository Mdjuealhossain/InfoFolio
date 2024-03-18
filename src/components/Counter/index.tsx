"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "src/services/action/ActionCounter";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };
  const handleDecrement = () => {
    dispatch(decrementCounter());
  };
  const handleReset = () => {
    dispatch(resetCounter());
  };

  return (
    <Stack justifyContent="center" alignItems="center" gap={2}>
      <Typography variant="h3">Counter app</Typography>
      <Typography>count: {count}</Typography>
      <Box display="flex" gap={2}>
        <Button variant="contained" onClick={handleIncrement}>
          Increment
        </Button>
        <Button variant="contained" onClick={handleDecrement}>
          Decrement
        </Button>
        <Button variant="contained" onClick={handleReset}>
          Reset
        </Button>
      </Box>
    </Stack>
  );
};

export default Counter;
