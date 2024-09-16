import { baseApi } from "../api/baseApi";

const userProfile = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateProfile: builder.mutation({
      query: (userInfo) => {
        console.log(userInfo);
        return {
          url: "/auth/users/me",
          method: "PUT",
          body: userInfo,
        };
      },
      providesTags: ["profile"],
    }),
    getUserProfile: builder.query({
      query: () => {
        return {
          url: "/auth/users/me",
          method: "GET",
          //   ret,
        };
      },
      invalidatesTags: ["profile"],
    }),
  }),
});

export const { useUpdateProfileMutation, useGetUserProfileQuery } = userProfile;
