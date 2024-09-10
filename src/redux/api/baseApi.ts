// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
const baseUrl = "http://localhost:5000/api";

export const baseApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include", // Important to include credentials for cookies
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (loginData) => ({
        url: "/auth/login",
        method: "POST",
        body: loginData,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = baseApi;

/* export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["bike"],
  endpoints: (builder) => ({
    getBikes: builder.query({
      query: () => ({
        url: "/bikes",
        method: "GET",
      }),
      providesTags: ["bike"],
      // pollingInterval: 30000,
    }),
  }),
}); */

// export const { useGetBikesQuery } = baseApi;
