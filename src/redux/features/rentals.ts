import { baseApi } from "../api/baseApi";

const rentals = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikeToBeReturn: builder.query({
      query: () => {
        return {
          url: `/rentals`,
          method: "GET",
          // body: data,
        };
      },
      providesTags: ["rentals"],
    }),
    returnBike: builder.mutation({
      query: (id) => {
        // const { id } = payload;
        console.log("delete id", id);
        return {
          url: `/rentals/${id}/return`,
          method: "put",
          // body: data,
        };
      },
      invalidatesTags: ["rentals"],
    }),
  }),
});

export const { useGetAllBikeToBeReturnQuery, useReturnBikeMutation } = rentals;
