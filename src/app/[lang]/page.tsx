"use client";

import { useParams } from "next/navigation";
import { useGetHotelsQuery } from "../_redux/slices/apiSlice";
import styles from "./page.module.css";
import { IHotel } from "../_types/hotel.types";
import { useState } from 'react';

export default function Home() {
  const params = useParams();
  const { lang } = params;
 

  const [query, setquery] = useState("")

  const { data } = useGetHotelsQuery(
    { locale: lang as string | "en-US"},
    {
      refetchOnMountOrArgChange: true,
    }
  );

  
  
  console.log(data, "getHotels");

  return (
    <main className={styles.main}>
      <div>
        <input onChange={(e) => setquery(e.target.value)} value={query} />
        <button>Search</button>
      </div>
      <div className={styles.container}>
       

        <div className={styles.hotelsList}>
          {data &&
            data.result.map((hotel: IHotel) => (
              <div key={hotel.id}>
                <p>{hotel.name}</p>
                <img src={hotel.firstImage.url} alt="hotel" />
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
