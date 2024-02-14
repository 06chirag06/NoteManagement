import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "./reducers/usernameSlice";

export default configureStore({
  reducer: {
    username: usernameReducer,
  },
});
