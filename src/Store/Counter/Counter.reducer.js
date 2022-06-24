import { saveData } from "../../Utils/localstorage";
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./Counter.actionTypes";

export const counterReducer = (state, { type, payload }) => {
  switch (type) {
    case INCREMENT_COUNTER: {
      let newCount = state.counter++ + 1;
      saveData("counter", newCount);
      return { ...state, newCount };
    }

    case DECREMENT_COUNTER: {
      let newCount = state.counter-- - 1;
      saveData("counter", newCount);
      return { ...state, newCount };
    }

    default: {
      return state;
    }
  }
};
