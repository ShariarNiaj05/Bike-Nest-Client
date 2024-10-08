import { baseApi } from "../api/baseApi";

const bikes = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    bikes: builder.query({
      query: () => {
        return {
          url: "/bikes",
          method: "GET",
        };
      },
      providesTags: ["bikes"],
    }),
    BikeDetails: builder.query({
      query: (id) => {
        return {
          url: `/bikes/${id}`,
          method: "GET",
        };
      },
      providesTags: ["bikes"],
    }),
  }),
});

export const { useBikesQuery, useBikeDetailsQuery } = bikes;
