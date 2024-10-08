"use client";

import styles from "../[lang]/page.module.css";
import Slider from "./Slider";

interface IFilterContainer {
  setDistance: (e: number) => void;
  setMinPrice: (e: number) => void;
  setMaxPrice: (e: number) => void;
}
export function FilterContainer(props: IFilterContainer) {
  const { setDistance, setMinPrice, setMaxPrice } = props;

  const handleBudgetChange = (newMin: number, newMax: number) => {
    setMinPrice(newMin);
    setMaxPrice(newMax);
  };

  return (
    <div className={styles.filterContainer}>
      <span className={styles.searchFilter}>Search Filters</span>

      <Slider min={0} max={1000} initialMin={0} initialMax={1000} onChange={handleBudgetChange} />

      <div className={styles.cityCenter}>
        <label>Distance from berlin city center?</label>
        <input type="number" placeholder="0" onChange={(e) => setDistance(e.target.valueAsNumber)} className={styles.distanceInput} />
      </div>
    </div>
  );
}
