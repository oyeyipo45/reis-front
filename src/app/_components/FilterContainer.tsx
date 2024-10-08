"use client";

import styles from "../[lang]/page.module.css";

interface IFilterContainer {
  setDistance: (e: number) => void;
  setMinPrice: (e : number) => void;
  setMaxPrice: (e : number) => void;
} 
export function FilterContainer(props: IFilterContainer) {
  const { setDistance, setMinPrice, setMaxPrice } = props;
  return (
    <div className={styles.filterContainer}>
      <p>Search Filters</p>

      <div>
        <p>What is your minimun budget per night?</p>
        <input type="number" placeholder="0" onChange={(e) => setMinPrice(e.target.valueAsNumber)} />
      </div>

      <div>
        <p>What is your maximun budget per night?</p>
        <input type="number" placeholder="0" onChange={(e) => setMaxPrice(e.target.valueAsNumber)} />
      </div>

      <div>
        <p>Distance from berlin city center?</p>
        <input type="number" placeholder="0" onChange={(e) => setDistance(e.target.valueAsNumber)} />
      </div>
    </div>
  );
}
