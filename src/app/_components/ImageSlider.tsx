import React, { useState } from "react";
import styles from "../[lang]/page.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from 'next/image';

interface ImageSliderProps {
  images: { url: string; caption: string }[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className={styles.imagSlider}>
      <div className={styles.sliderImageContainer}>
        <Image src={images[currentIndex].url} alt={images[currentIndex].caption} className={styles.sliderImage} width={500} height={400} />
        <FaChevronLeft onClick={prevImage} className={`${styles.sliderIcon} ${styles.leftIcon}`} />
        <FaChevronRight onClick={nextImage} className={`${styles.sliderIcon} ${styles.rightIcon}`} />
        <p className={styles.sliderCaption}>{images[currentIndex].caption}</p>
      </div>
    </div>
  );
};

export default ImageSlider;
