"use client";

import React from "react";
import { IHotel } from "@/app/_types/hotel.types";
import { useGetHotelQuery } from "@/app/_redux/slices/apiSlice";
import { useParams, useRouter } from "next/navigation";
import styles from "../../page.module.css";

interface HotelDetailsProps {
  hotel: IHotel;
}

const HotelDetails: React.FC<HotelDetailsProps> = () => {
  const params = useParams();
  const router = useRouter();

  const { id, lang } = params;
  const { data } = useGetHotelQuery({ id: id as string, locale: lang as string });

  const hotel = data && (data as IHotel);


  return (
    <>
      <div className={styles.back} onClick={() => router.back()}>
        Back
      </div>
      {hotel && (
        <div className={styles.hotelDetailsContainer}>
          <h1>{hotel.name}</h1>
          <div className={styles.hotelDetails}>
            <div className={styles.hotelImages}>
              <div className={styles.hotelImage}>
                <img src={hotel.firstImage.url} alt={hotel.firstImage.caption} />
                <p>{hotel.firstImage.caption}</p>
              </div>
            </div>
            <div className={styles.hotelInfo}>
              <p>
                <strong>Address:</strong> {hotel.address}, {hotel.city}
              </p>
              <p>
                <strong>Description:</strong> {hotel.description}
              </p>
              <p>
                <strong>Minimum Price:</strong> {hotel.minPrice} {hotel.currencyCode}
              </p>
              <p>
                <strong>Distance to Center:</strong> {hotel.distanceToCenterkm} km
              </p>

              <h2>Deals</h2>
              {hotel.deal ? (
                <div className={styles.hotelDeal}>
                  <h3>{hotel.deal.headline}</h3>
                  <p>{hotel.deal.details}</p>
                  <p>
                    <strong>Expires on:</strong> {new Date(hotel.deal.expireTime).toLocaleDateString()}
                  </p>
                </div>
              ) : (
                <p>No deals available.</p>
              )}
            </div>
          </div>
        </div>
      )}{" "}
    </>
  );
};

export default HotelDetails;
