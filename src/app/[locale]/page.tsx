// "use client";
import React from "react";
import { Box } from "@mui/material";
import InitialStateRedux from "src/widgets/InitialStateRedux";
import CompleteCounterApp from "src/widgets/CompleteCounterApp";
import Payload from "src/widgets/Payload";
import MultipleReducer from "src/widgets/MultipleReducer";
import Midleware from "src/widgets/Midleware";

const App = () => {
  return (
    <Box>
      <Midleware />
    </Box>
  );
};

export default App;
