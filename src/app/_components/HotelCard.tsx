"use client"


import { IHotel } from '../_types/hotel.types';
import styles from "../[lang]/page.module.css";

export function HotelCard({ hotel }: { hotel: IHotel }) {
    return (
      <>
        <div className={styles.card}>
          <img className={styles.image} width={350} height={250} src={hotel.firstImage.url} alt={hotel.name} />
          <div>
            <h2>{hotel.name}</h2>
          </div>
        </div>
      </>
    );
}