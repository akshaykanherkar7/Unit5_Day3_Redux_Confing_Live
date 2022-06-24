import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./Counter.actionTypes";

export const incCounter = () => ({ type: INCREMENT_COUNTER });
export const decCounter = () => ({ type: DECREMENT_COUNTER });
