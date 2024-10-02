import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://bike-rental-service-one.vercel.app/api",
    baseUrl: "http://localhost:5173/api",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth?.auth.token;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["profile", "bikes", "users", "rentals"],
  endpoints: () => ({}),
});
