import { baseApi } from "../api/baseApi";

const rentals = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRentalsForUser: builder.query({
      query: (id) => {
        console.log("delete id", id);
        return {
          url: `/bikes/${id}`,
          method: "DELETE",
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

export const { useGetAllRentalsForUserQuery, useReturnBikeMutation } = rentals;
