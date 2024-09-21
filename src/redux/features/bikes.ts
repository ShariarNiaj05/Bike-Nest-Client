import { baseApi } from "../api/baseApi";

const bikes = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    bikes: builder.query({
      query: () => {
        return {
          url: "/auth/users/me",
          method: "GET",
        };
      },
      // providesTags: ["profile"],
    }),
  }),
});

export const { useBikesQuery } = bikes;
