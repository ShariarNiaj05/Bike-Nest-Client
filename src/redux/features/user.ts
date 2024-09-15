import { baseApi } from "../api/baseApi";

const userProfile = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateProfile: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/users/me",
        method: "PUT",
        body: userInfo,
      }),
    }),
  }),
});

export const { useUpdateProfileMutation } = userProfile;
