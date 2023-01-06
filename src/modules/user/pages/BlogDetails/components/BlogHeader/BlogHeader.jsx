import React from "react";

import styles from "./BlogHeader.module.css";

export default function BlogHeader({
  title,
  location,
  image = "https://anywhereweroam.com/wp-content/uploads/2022/02/anywhere_we_roam_road.jpg",
}) {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.pageHero}>
        <img src={image} alt="blog-header-bg" />
        <div className={styles.blogMetaContainer}>
          <h1>{title}</h1>
          <h2>{location}</h2>
        </div>
      </div>
    </div>
  );
}
