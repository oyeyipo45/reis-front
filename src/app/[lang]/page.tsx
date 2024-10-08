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
import { useDispatch } from "react-redux";
import { addHotels } from "../_redux/slices/hotelsSlice";
import { Logo } from '../../../public/asessts';

export default function Home() {
  const params = useParams();
  const { lang } = params;

  const [name, setName] = useState("");
  const [seatchTerm, setSeatchTerm] = useState("");
  const [minPrice, setMinPrice] = useState<number | undefined>();
  const [maxPrice, setMaxPrice] = useState<number | undefined>();
  const [distance, setDistance] = useState<number | undefined>();
  const [longitude, setLongitude] = useState<number | undefined>();
  const [latitude, setLatitude] = useState<number | undefined>();

  const { data, isLoading, isError, isSuccess } = useGetHotelsQuery(
    {
      locale: lang as string | "en-US",
      name,
      distance: Number(distance),
      minPrice: Number(minPrice),
      maxPrice: Number(maxPrice),
      lat: Number(latitude),
      lng: Number(longitude),
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const dispatch = useDispatch();

  dispatch(addHotels(data?.result as IHotel[]));

  const result = data?.result as IHotel[];

  const displayHotels = data && result.length > 0 && isSuccess;
  const displayNoHotels = data && result.length === 0 && isSuccess;

  const handleChange = debounce((value: string) => {
    setName(value);
  });

  return (
    <main className={styles.main}>
      <div className={styles.searchInputContainer}>
        <img src={Logo.src} className={styles.logo} width={320} height={100} alt="Reisetopia" />
        <input placeholder="Search hotel name .." className={styles.searchInput} onChange={(e) => handleChange(e.target.value)} value={name} />
      </div>

      <div className={styles.container}>
        <FilterContainer setDistance={setDistance} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} setLongitude={setLongitude} setLatitude={setLatitude} />
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
