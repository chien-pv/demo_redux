// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice";
// let store = createStore(reducer);
export const store = configureStore({
  reducer: todoReducer,
});

export default store;
