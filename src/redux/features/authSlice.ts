import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../api/baseApi";

export interface AuthState {
  user: any;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.data;
        state.token = payload.token;
      }
    );
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
