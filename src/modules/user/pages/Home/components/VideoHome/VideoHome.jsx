import React from 'react';

import styles from './VideoHome.module.css';

export default function VideoHome({centerText,location}) {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.pageHero}>
      <video id="background-video" loop autoPlay muted>
        <source src="img/PexelsHomePage.mp4" type="video/mp4" />
</video>
        <h1 className={styles.centertext}>{centerText}</h1>
        <p className={styles.locationtext}>{location}</p>
      </div>
    </div>
  );
}