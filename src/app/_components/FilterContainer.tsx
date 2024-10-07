"use client";

import styles from "../[lang]/page.module.css";

export function FilterContainer() {
  return (
    <div className={styles.filterContainer}>
      <p>Search Filters</p>

      <div>
        <p>What is your budget per night?</p>
        <input type="number" placeholder="0" />
      </div>
    </div>
  );
}
