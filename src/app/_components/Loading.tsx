"use client";

import styles from "../[lang]/page.module.css";

export function Loading() {
  return (
    // <div className={styles.loadingList}>
    //   <div className={styles.loadingListDots}>
    //     {[...Array(5)].map((_, index) => (
    //       <div className={styles.loadingListDot}></div>
    //     ))}
    //   </div>
    //   </div>

    <div className={styles.skeletonContainer}>
      {[...Array(5)].map((_, index) => (
        <div key={index}>
          <div className={styles.skeletonItem}></div>
        </div>
      ))}
    </div>
  );
}
