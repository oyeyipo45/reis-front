"use client"


import { IHotel } from '../_types/hotel.types';
import styles from "../[lang]/page.module.css";

export function HotelCard({ hotel }: { hotel: IHotel }) {
    return (
      <>
        <div className={styles.hotelCard}>
          <div className={styles.hotelImage}>
            <img height={200} src={hotel.firstImage.url} alt={hotel.firstImage.caption} />
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
            {/* <div className={styles.hotelDeal}>
              <h3>Deal: {hotel.firstDeal.headline}</h3>
              <p>{hotel.firstDeal.details}</p>
              <p>
                <strong>Expires on:</strong> {new Date(hotel.firstDeal.expireTime).toLocaleDateString()}
              </p>
            </div> */}
          </div>
        </div>
      </>
    );
}
