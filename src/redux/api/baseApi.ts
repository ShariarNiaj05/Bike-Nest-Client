// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

// Define a service using a base URL and expected endpoints
/* const baseUrl = "http://localhost:5000/api";

export const baseApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include", // Important to include credentials for cookies
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (loginData) => (
        console.log(loginData),
        {
          url: "/auth/login",
          method: "POST",

          body: loginData,
        }
      ),
    }),
  }),
});

export const { useLoginUserMutation } = baseApi; */

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

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `${token}`);
    }

    return headers;
  },
});
