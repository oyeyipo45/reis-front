"use client";

import styles from "../[lang]/page.module.css";

export function Loading() {
  return (
    <div className={styles.skeletonContainer}>
      {[...Array(10)].map((_, index) => (
        <div key={index}>
          <div className={styles.skeletonItem}></div>
        </div>
      ))}
    </div>
  );
}
