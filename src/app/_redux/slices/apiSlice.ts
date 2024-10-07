import { HotelSearchResult } from "@/app/_types/hotel.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  tagTypes: ["Hotels"],
  endpoints: (builder) => ({
    getHotels: builder.query<HotelSearchResult, { locale: string; name: string }>({
      query: ({ locale, name }) => ({
        url: `v1/recruiting/hotels?lang=${locale}&search=${name}`,
      }),
    }),
  }),
});

export const { useGetHotelsQuery } = apiSlice;
