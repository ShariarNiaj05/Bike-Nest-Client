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
    }),
    getUserProfile: builder.query({
      query: () => {
        return {
          url: "/auth/users/me",
          method: "GET",
          //   body: "",
        };
      },
    }),
  }),
});

export const { useUpdateProfileMutation, useGetUserProfileQuery } = userProfile;
