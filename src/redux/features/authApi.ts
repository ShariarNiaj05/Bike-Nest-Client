import { baseApi } from "../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    signUser: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/signup",
        method: "POST",
        body: userInfo,
      }),
    }),
    /*  updateProfile: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/users/me",
        method: "PUT",
        body: userInfo,
      }),
    }), */
  }),
});

export const {
  useLoginUserMutation,
  useSignUserMutation,
  // useUpdateProfileMutation,
} = authApi;
