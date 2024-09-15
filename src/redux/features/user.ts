import { baseApi } from "../api/baseApi";

const userProfile = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateProfile: builder.mutation({
        query: (userInfo) => ({
            console.log(userInfo)
        return {
        url: "/auth/users/me",
        method: "PUT",
            body: userInfo,
        } }),
    }),
  }),
});

export const { useUpdateProfileMutation } = userProfile;
