import { baseApi } from "../api/baseApi";

const adminBike = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBike: builder.mutation({
      query: (data) => {
        return {
          url: "/bikes",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["bikes"],
    }),
    updateBike: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/bikes/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["bikes"],
    }),
    deleteBike: builder.mutation({
      query: (id) => {
        console.log("delete id", id);
        return {
          url: `/bikes/${id}`,
          method: "DELETE",
          // body: data,
        };
      },
      invalidatesTags: ["bikes"],
    }),
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

export const {
  useAddBikeMutation,
  useUpdateBikeMutation,
  useDeleteBikeMutation,
  useReturnBikeMutation,
} = adminBike;
