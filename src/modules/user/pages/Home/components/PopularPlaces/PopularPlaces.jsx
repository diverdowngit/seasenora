import React from 'react';

import CityCard from './components/CityCard';
import styles from './PopularPlaces.module.css';

export default function PopularPlaces() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Explore popular places</h2>
        <div className={styles.popularPlacesList}>
          <CityCard
            name='Madrid'
            img='https://res.cloudinary.com/dkhvcn7i6/image/upload/v1659990774/Popular%20Places/madrid_t8rvut.jpg'
          />
          <CityCard
            name='Milan'
            img='https://res.cloudinary.com/dkhvcn7i6/image/upload/v1659991033/Popular%20Places/milan_mfjlyl.jpg'
          />
          <CityCard
            name='Paris'
            img='https://res.cloudinary.com/dkhvcn7i6/image/upload/v1659991025/Popular%20Places/paris_wbjynf.jpg'
          />
          <CityCard
            name='Frankfurt'
            img='https://res.cloudinary.com/dkhvcn7i6/image/upload/v1659991997/Popular%20Places/frankfurt_vbaeew.jpg'
          />
        </div>
      </div>
    </div>
  );
}
