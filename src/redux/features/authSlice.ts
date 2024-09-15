import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type TUser = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: string;
  createdAt: number;
  updatedAt: number;
  __v: number;
};

export interface AuthState {
  user: TUser | null;
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
});
export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.auth.token;
export const useCurrentUser = (state: RootState) => state.auth.auth.user;
