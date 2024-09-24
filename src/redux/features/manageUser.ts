import { baseApi } from "../api/baseApi";

const manageUser = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => {
        return {
          url: "/auth",
          method: "GET",
        };
      },
      providesTags: ["bikes"],
    }),
  }),
});

export const { useGetAllUsersQuery } = manageUser;
