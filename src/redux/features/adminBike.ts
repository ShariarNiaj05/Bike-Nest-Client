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
      // providesTags: ["profile"],
    }),
  }),
});

export const { useAddBikeMutation } = adminBike;
