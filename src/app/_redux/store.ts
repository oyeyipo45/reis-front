import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

// @ts-ignore
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
