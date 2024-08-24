// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
// const baseUrl = "http://localhost:5000/api/v1";
const baseUrl = "https://sports-sphere-server-swart.vercel.app/api/v1";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    product: builder.query({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
      providesTags: ["Product"],
      // pollingInterval: 30000,
    }),
    addProduct: builder.mutation({
      query: (body) => ({
        url: `/product/add-product`,
        method: "POST",
        body,
      }),
    }),
    singleProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/product/update-product/${id}`,
        method: "PUT",
        body: payload,
      }),
    }),
    checkout: builder.mutation({
      query: (body) => ({
        url: `/checkout`,
        method: "PUT",
        body,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/delete-product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useProductQuery,
  useAddProductMutation,
  useSingleProductQuery,
  useCheckoutMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = baseApi;
