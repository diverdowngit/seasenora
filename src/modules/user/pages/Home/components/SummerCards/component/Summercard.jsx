import React from 'react';

import styles from './Summercard.module.css';

const DEFAULT_IMG =
  'https://img.cdn.zostel.com/zostel/gallery/images/7CHJ2bvRQMG4-O8BxdWQ6Q/banikhet-20220609102033.jpg?h=400';

export default function Summercard({ heading, desc, img = DEFAULT_IMG }) {
  return (
    <div className={styles.container}>
      <div className={styles.carddesign}>
      <img src={img} alt='SummerCollections' />
      <div className={styles.carddesc}>
        <p>{desc}</p>
      </div>
      </div>
      <div className={styles.heading}>
        <h2>{heading}</h2>
      </div>
    </div>
  );
}
