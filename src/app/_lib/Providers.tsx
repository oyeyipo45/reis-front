"use client";


import { store } from '@/app/_redux/store';
import { Provider } from "react-redux";

export function Providers({ children, locale, settings }: any) {
 

  return (
      <Provider store={store}>
       {children}
      </Provider>
  );
}
