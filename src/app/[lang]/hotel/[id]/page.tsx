"use client";

import React from "react";
import { IDeal, IHotel, IImage } from "@/app/_types/hotel.types";
import { useGetHotelQuery } from "@/app/_redux/slices/apiSlice";
import { useParams, useRouter } from "next/navigation";
import styles from "../../page.module.css";
import ImageSlider from "@/app/_components/ImageSlider";
import { Loading } from '@/app/_components/Loading';

interface HotelDetailsProps {
  hotel: IHotel;
}

const HotelDetails: React.FC<HotelDetailsProps> = () => {
  const params = useParams();
  const router = useRouter();

  const { id, lang } = params;
  const { data, isLoading, isError} = useGetHotelQuery({ id: id as string, locale: lang as string });

  console.log(data, "data");

  const hotel = data && (data.result as IHotel);

  return (
    <div className={styles.details}>
      <div className={styles.back} onClick={() => router.back()}>
        Back
      </div>
      {isLoading && <Loading />}
      {isError && <p>An error occured</p>}
      {hotel && (
        <div className={styles.hotelDetailsContainer}>
          <h1>{hotel.name}</h1>
          <div className={styles.hotelDetails}>
            <ImageSlider images={hotel.images.map((image: IImage) => ({ url: image.url, caption: image.caption }))} />

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
            </div>
          </div>
          <div className={styles.dealsAndBenefit}>
            <div>
              <h2>Deals</h2>
              {hotel.deals.length > 0 && hotel.deals ? (
                <div className={styles.hotelDeal}>
                  {hotel.deals.map((deal: IDeal, index: number) => (
                    <div key={index}>
                      <p>
                        <strong>Headline:</strong> {deal.headline}
                      </p>
                      <p>
                        <strong>Details:</strong> {deal.details}
                      </p>
                      <p>
                        <strong>Expire time:</strong> {new Date(deal.expireTime as Date).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No deals available.</p>
              )}
            </div>

            <div>
              <h2>Benefits</h2>
              {hotel.benefits.length > 0 && hotel.benefits ? (
                <div className={styles.hotelDeal}>
                  <ul>
                    {hotel.benefits.map((benefit: { text: string }, index: number) => (
                      <div key={index}>
                        <li>{benefit.text}</li>
                      </div>
                    ))}
                  </ul>
                </div>
              ) : (
                <p>No Benefits available.</p>
              )}
            </div>
          </div>
        </div>
      )}{" "}
    </div>
  );
};

export default HotelDetails;
