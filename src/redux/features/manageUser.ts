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
      providesTags: ["users"],
    }),
    deleteUser: builder.mutation({
      query: (id: string) => {
        return {
          url: "/auth",
          method: "GET",
          body: id,
        };
      },
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useGetAllUsersQuery } = manageUser;
