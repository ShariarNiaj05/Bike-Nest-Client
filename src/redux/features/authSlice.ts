import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

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
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  /*  extraReducers: (builder) => {
    builder.addMatcher(
      baseApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.data;
        state.token = payload.token;
      }
    );
  }, */
});
export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;
