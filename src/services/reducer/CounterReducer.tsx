import { DECREMENT, INCREMENT, RESET } from "../constant/counterConst";

const initCounter = {
  count: 0,
};

export const counterReducer = (state = initCounter, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};
