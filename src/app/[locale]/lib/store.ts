import { createStore } from "redux";
import { counterReducer } from "src/services/reducer/CounterReducer";

import { configureStore } from "@reduxjs/toolkit";

// export const makeStore = () => {
//   return configureStore({
//     reducer: {counterReducer},
//   });
// };

export const store = createStore(counterReducer);
