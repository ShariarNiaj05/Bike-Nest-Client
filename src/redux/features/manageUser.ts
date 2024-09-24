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
        console.log(id);
        return {
          url: "/auth",
          method: "DELETE",
          body: id,
        };
      },
      invalidatesTags: ["users"],
    }),
    promoteUser: builder.mutation({
      query: (id: string) => {
        console.log(id);
        return {
          url: "/auth/promote-role",
          method: "PATCH",
          body: id,
        };
      },
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useDeleteUserMutation,
  usePromoteUserMutation,
} = manageUser;
