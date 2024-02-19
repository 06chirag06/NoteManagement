import { configureStore, createStore } from "@reduxjs/toolkit";
import usernameReducer from "./reducers/usernameSlice";
import { createStoreHook } from "react-redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

export default store;
