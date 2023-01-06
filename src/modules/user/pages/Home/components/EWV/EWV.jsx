import React from 'react';

import styles from './EWV.module.css';

export default function EWV() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.exploreheading}>Sail with Us</h2>
        <h2 className={styles.secondHeading}> <a href="https://www.youtube.com/@svseasenora"target="_blank" rel="noopener noreferrer">A Travel Site</a></h2>
        <div className={styles.storyWrapper}>
          <div className={styles.story}>
          It’s a big wide world out there. A world of cultural charms and natural wonders; mega-cities and remote outposts;
           paths to cross and lessons to learn;
           limitless kindness and harsh realities.
          </div>
          <div className={styles.story}>
          We travel to enquire, hear stories, and be awestruck by incredible scenery.
           To witness the ingenuity and defiance of individuals and the remarkable output of their cooperation. 
           To be humbled by the history of yesterday, 
          informed about the politics of today, and excited by the possibilities of tomorrow.
          </div>
          <div className={styles.story}>
          We travel to have fun. The moments that moved us, the characters we encountered, and the stage upon which it is all set. 
          It’s a big wide world out there, come see it with us.
          </div>
        </div>
      </div>
    </div>
  );
}
