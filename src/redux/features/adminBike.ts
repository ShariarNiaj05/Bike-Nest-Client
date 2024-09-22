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
      query: (payload) => {
        const { id, data } = payload;
        return {
          url: `/bikes/${id}`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["bikes"],
    }),
  }),
});

export const { useAddBikeMutation } = adminBike;
