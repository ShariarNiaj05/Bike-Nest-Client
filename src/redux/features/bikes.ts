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
  }),
});

export const { useBikesQuery } = bikes;
