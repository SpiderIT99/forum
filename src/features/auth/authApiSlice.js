import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    authorize: build.mutation({
      query: (body) => ({
        url: "/connect/token",
        method: "POST",
        body,
        headers: {
          Accept: "application/json, text/plain, */*",
        },
      }),
    }),
    postUser: build.mutation({
      query: (body) => ({
        url: "/user",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAuthorizeMutation, usePostUserMutation } = authApiSlice;
