// Need to use the React-specific entry point to import createApi
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/authSlice";
import { Cookie } from "lucide-react";

// Define a service using a base URL and expected endpoints
/* const baseUrl = "http://localhost:5000/api";

export const baseApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include", // Important to include credentials for cookies
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (loginData) => (
        console.log(loginData),
        {
          url: "/auth/login",
          method: "POST",

          body: loginData,
        }
      ),
    }),
  }),
});

export const { useLoginUserMutation } = baseApi; */

/* export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["bike"],
  endpoints: (builder) => ({
    getBikes: builder.query({
      query: () => ({
        url: "/bikes",
        method: "GET",
      }),
      providesTags: ["bike"],
      // pollingInterval: 30000,
    }),
  }),
}); */

// export const { useGetBikesQuery } = baseApi;

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    console.log("headers", headers);
    console.log("getState", getState);

    const token = (getState() as RootState).auth.token;
    console.log("token form fetch base query", token);
    if (token) {
      headers.set("authorization", `${token}`);
    }

    return headers;
  },
});

const baseQueryWithToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  /* if (result?.error?.status === 404) {
    // toast.error(result?.error?.data?.message);
    console.log("got 404 error in base api");
  }
  if (result?.error?.status === 403) {
    // toast.error(result?.error?.data?.message);
    console.log("got 403 error in base api");
  } */
  if (result?.error?.status === 401) {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      credentials: "include",
    });

    const data = await res.json();
    console.log("data in base api", data);

    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;

      api.dispatch(
        setUser({
          user,
          token: data.data.accessToken,
        })
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithToken,
  tagTypes: ["bikes"],
  endpoints: () => ({}),
});
