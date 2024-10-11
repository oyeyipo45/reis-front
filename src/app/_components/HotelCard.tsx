"use client";

import { IHotel } from "../_types/hotel.types";
import styles from "../[lang]/page.module.css";
import { useParams, useRouter } from "next/navigation";
import Image from 'next/image';

export function HotelCard({ hotel }: { hotel: IHotel }) {
  const router = useRouter()
  const params = useParams();

  const { lang } = params;
  return (
    <>
      <div className={styles.hotelCard} onClick={() => router.push(`/${lang}/hotel/${hotel.id}`)}>
        <div className={styles.hotelImage}>
          <Image height={200} width={250} src={hotel.firstImage.url} alt={hotel.firstImage.caption} />
          <p>{hotel.firstImage.caption}</p>
        </div>
        <div className={styles.hotelInfo}>
          <h2>{hotel.name}</h2>
          <p>
            <strong>Address:</strong> {hotel.address}, {hotel.city}
          </p>
          <p>
            <strong>Price:</strong> {hotel.minPrice} {hotel.currencyCode}
          </p>
          <p>
            <strong>Distance to center:</strong> {hotel.distanceToCenterkm} km
          </p>
        </div>
      </div>
    </>
  );
}
