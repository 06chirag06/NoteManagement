import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const params = {
        username: username,
        password: password,
      };
      let link = "http://localhost:8000/login/";
      const response = await axios.post(link, params, {
        headers: { "Content-Type": "application/json" },
      });
      let data = await response.data;
      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const loginSlice = createSlice({
    name:"login",
    initialState: {
        token: "",
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: ""
    },
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;

            return state;
        }
    },
    
});

export const { clearState } = loginSlice.actions;
export const loginSelector = (state) => state.login;
