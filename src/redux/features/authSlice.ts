import { baseApi } from "../api/baseApi";

/* import { createSlice } from "@reduxjs/toolkit";
import { baseApi } from "../api/baseApi";

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
      baseApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.data;
        state.token = payload.token;
      }
    );
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
 */

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
