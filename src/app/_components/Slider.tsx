"use client"

import styles from "../[lang]/page.module.css";

import React, { useState } from "react";

interface SliderProps {
  min: number;
  max: number;
  initialMin?: number;
  initialMax?: number;
  onChange: (min: number, max: number) => void;
}

const Slider: React.FC<SliderProps> = ({ min, max, initialMin = 0, initialMax = max, onChange }) => {
  const [minValue, setMinValue] = useState(initialMin);
  const [maxValue, setMaxValue] = useState(initialMax);

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMinValue = parseInt(event.target.value);
    setMinValue(newMinValue);
    onChange(newMinValue, maxValue);
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = parseInt(event.target.value);
    setMaxValue(newMaxValue);
    onChange(minValue, newMaxValue);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderInnerContainer}>
        <label htmlFor="min-budget">Min Budget:</label>
        <input type="range" id="min-budget" min={min} max={max} value={minValue} className={styles.slider} onChange={handleMinChange} />
      </div>
      <div className={styles.sliderInnerContainer}>
        <label htmlFor="max-budget">Max Budget:</label>
        <input type="range" id="max-budget" min={min} max={max} value={maxValue} className={styles.slider} onChange={handleMaxChange} />
      </div>
      <span id="budgetRange">
        Budget: {minValue} - {maxValue}
      </span>
    </div>
  );
};

export default Slider;
