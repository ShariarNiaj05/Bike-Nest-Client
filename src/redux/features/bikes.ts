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
      // providesTags: ["profile"],
    }),
    BikeDetails: builder.query({
      query: (id) => {
        console.log("id in redux", id);
        return {
          url: `/bikes/${id}`,
          method: "GET",
        };
      },
      // providesTags: ["profile"],
    }),
  }),
});

export const { useBikesQuery, useBikeDetailsQuery } = bikes;
