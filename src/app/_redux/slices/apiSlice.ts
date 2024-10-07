import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  tagTypes: ["Hotels"],
  endpoints: (builder) => ({
    getHotels: builder.query<any, { locale: string }>({
      query: ({ locale }) => ({
        url: `v1/recruiting/hotels?lang=${locale}`,
      }),
    }),
  }),
});


export const {
  useGetHotelsQuery
} = apiSlice