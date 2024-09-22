import { baseApi } from "../api/baseApi";

const adminBike = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBike: builder.mutation({
      query: (data) => {
        return {
          url: "/bikes",
          method: "GET",
        };
      },
      // providesTags: ["profile"],
    }),
  }),
});

export const { useAddBikeMutation } = adminBike;
