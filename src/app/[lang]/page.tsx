"use client";

import { useParams } from "next/navigation";
import { useGetHotelsQuery } from "../_redux/slices/apiSlice";
import styles from "./page.module.css";
import { IHotel } from "../_types/hotel.types";
import { useState } from 'react';

export default function Home() {
  const params = useParams();
  const { lang } = params;
 

  const [name, setName] = useState("")

  const { data } = useGetHotelsQuery(
    { locale: lang as string | "en-US", name},
    {
      refetchOnMountOrArgChange: true,
    }
  );


  return (
    <main className={styles.main}>
      <div>
        <input onChange={(e) => setName(e.target.value)} value={name} />
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
