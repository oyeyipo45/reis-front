"use client";

import { useParams } from "next/navigation";
import { useGetHotelsQuery } from "../_redux/slices/apiSlice";
import styles from "./page.module.css";
import { IHotel } from "../_types/hotel.types";
import { useState } from "react";
import { FilterContainer } from "../_components/FilterContainer";
import { HotelCard } from "../_components/HotelCard";
import { Loading } from "../_components/Loading";

export default function Home() {
  const params = useParams();
  const { lang } = params;

  const [name, setName] = useState("");

  const { data, isLoading, isError } = useGetHotelsQuery(
    { locale: lang as string | "en-US", name },
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
        <FilterContainer />
        <div className={styles.hotelsList}>
          {isLoading && <Loading />}
         
          {data &&
            data.result.map((hotel: IHotel) => (
              <div key={hotel.id}>
                <HotelCard hotel={hotel} />
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
