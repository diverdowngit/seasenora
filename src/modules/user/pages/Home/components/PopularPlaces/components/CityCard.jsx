import React from 'react';

import styles from './CityCard.module.css';

const DEFAULT_IMG =
  'https://img.cdn.zostel.com/zostel/gallery/images/7CHJ2bvRQMG4-O8BxdWQ6Q/banikhet-20220609102033.jpg?h=400';

export default function CityCard({ name, img = DEFAULT_IMG }) {
  return (
    <div className={styles.container}>
      <img src={img} alt='PopularPlaces' />
      <div className={styles.cityName}>
        <h2>{name}</h2>
      </div>
    </div>
  );
}
