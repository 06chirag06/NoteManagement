import { createSlice } from "@reduxjs/toolkit";

const usernameSlice = createSlice({
  name: "username",
  initialState: {
    value: "",
  },
  reducers: {
    updateUsername: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateUsername } = usernameSlice.actions;

export default usernameSlice.reducer;
