"use client";

import { useParams } from "next/navigation";
import { useGetHotelsQuery } from "../_redux/slices/apiSlice";
import styles from "./page.module.css";
import { IHotel } from "../_types/hotel.types";
import { useState } from "react";
import { FilterContainer } from "../_components/FilterContainer";
import { HotelCard } from "../_components/HotelCard";
import { Loading } from "../_components/Loading";
import { debounce } from "lodash";

export default function Home() {
  const params = useParams();
  const { lang } = params;

  const [name, setName] = useState("");
  const [minPrice, setMinPrice] = useState<number | undefined>();
  const [maxPrice, setMaxPrice] = useState<number | undefined>();
  const [distance, setDistance] = useState<number | undefined>();


  const { data, isLoading, isError } = useGetHotelsQuery(
    { locale: lang as string | "en-US", name, distance: Number(distance), minPrice: Number(minPrice), maxPrice: Number(maxPrice) },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const result = data?.result as IHotel[];

  const displayHotels = data && result.length > 0;
  const displayNoHotels = data && result.length === 0;

  const handleChange = debounce((value: string) => {
    setName(value);
  }, 500);

  return (
    <main className={styles.main}>
      <div className={styles.searchInputContainer}>
        <input placeholder="Search hotel name.." className={styles.searchInput} onChange={(e) => handleChange(e.target.value)} value={name} />
      </div>

      <div className={styles.container}>
        <FilterContainer setDistance={setDistance} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
        <div className={styles.hotelList}>
          {isLoading && <Loading />}
          {isError && <p>An error occured</p>}
          {displayNoHotels && <p>No Hotels Available</p>}
          {displayHotels &&
            result.map((hotel: IHotel) => (
              <div key={hotel.id}>
                <HotelCard hotel={hotel} />
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
