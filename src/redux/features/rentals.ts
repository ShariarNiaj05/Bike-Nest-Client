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
        return {
          url: `/rentals/${id}/return`,
          method: "put",
          // body: data,
        };
      },
      invalidatesTags: ["rentals"],
    }),
    getMyRentals: builder.query({
      query: () => {
        return {
          url: "/rentals/rentals-for-user",
          method: "GET",
          //   ret,
        };
      },
      providesTags: ["rentals"],
    }),
    createBooking: builder.mutation({
      query: (data) => {
        return {
          url: "/rentals",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["rentals"],
    }),
  }),
});

export const {
  useGetAllBikeToBeReturnQuery,
  useReturnBikeMutation,
  useGetMyRentalsQuery,
  useCreateBookingMutation,
} = rentals;
