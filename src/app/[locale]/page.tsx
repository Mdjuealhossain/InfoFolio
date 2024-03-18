// "use client";
import React from "react";
import { Box } from "@mui/material";
import InitialStateRedux from "src/widgets/InitialStateRedux";
import CompleteCounterApp from "src/widgets/CompleteCounterApp";
import Payload from "src/widgets/Payload";
import MultipleReducer from "src/widgets/MultipleReducer";
import Midleware from "src/widgets/Midleware";
import DataFetchReduxThunk from "src/widgets/DataFetchReduxThunk";
import Counter from "src/components/Counter";

const App = () => {
  return (
    <Box justifyContent="center" alignItems="center" display="flex" mt={4}>
      <Counter />
    </Box>
  );
};

export default App;
