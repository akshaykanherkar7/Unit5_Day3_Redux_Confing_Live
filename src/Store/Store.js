import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { loadData } from "../Utils/localstorage";
import { counterReducer } from "./Counter/Counter.reducer";

const initialState = {
  counter: loadData("counter") || 0,
};
export const store = legacy_createStore(
  counterReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
