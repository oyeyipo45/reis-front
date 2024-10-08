import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IHotel } from "@/app/_types/hotel.types";
import { get } from 'lodash';

export interface HotelState {
  hotels: IHotel[];
}

const initialState: HotelState = {
  hotels: [],
};

export const hotelSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    addHotels(state, action: { payload: IHotel[] }) {
      const hotels = action.payload;
      if (hotels) {
        state.hotels = [...hotels];
      }
    },
  },
});

export const { addHotels } = hotelSlice.actions;

export const hotelsReducer = hotelSlice.reducer;

const getHotels = (state: RootState) => state.hotels.hotels;