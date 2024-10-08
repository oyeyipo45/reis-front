import { HotelResult, HotelSearchResult, IHotel } from "@/app/_types/hotel.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  tagTypes: ["Hotels"],
  endpoints: (builder) => ({
    getHotels: builder.query<HotelSearchResult, { locale: string; name: string; distance: number; minPrice: number; maxPrice: number, lat : number, lng : number }>({
      query: ({ locale, name, distance, minPrice, maxPrice, lat, lng }) => ({
        url: `v1/recruiting/hotels?lang=${locale}`,
        params: {
          search: name || undefined,
          distance: distance || undefined,
          minPrice: minPrice || undefined,
          maxPrice: maxPrice || undefined,
          lat: lat || undefined,
          lng: lng || undefined,
        },
      }),
    }),
    getHotel: builder.query<any, { id: string; locale: string }>({
      query: ({ locale, id }) => ({
        url: `v1/recruiting/hotels/${id}?lang=${locale}`,
      }),
      transformResponse: (response: any) => {
        return response && (response.result[0] as IHotel);
      },
    }),
  }),
});

export const { useGetHotelsQuery, useGetHotelQuery } = apiSlice;
