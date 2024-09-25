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
    returnBike: builder.mutation({
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
  }),
});

export const {
  useAddBikeMutation,
  useUpdateBikeMutation,
  useDeleteBikeMutation,
} = adminBike;
