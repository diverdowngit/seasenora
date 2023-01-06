import React from 'react';

import styles from './ExploreList.module.css';
import classnames  from 'classnames';
import Imagehover from '../ImageSlider/Imagehover';

export default function ExploreList() {
  return (
    <div className={styles.container}>
    {/* <div className={styles.explorelogo}><img src="https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660331457/Logo/pexels-eberhard-grossgasteiger-844297_fz0hag.png" alt="Explore Logo"></img></div> */}

      <div className={styles.wrapper}>
        <h1 className={styles.animatecharacter}>Explore with us</h1>
        
        <div className={styles.exploreList}>
          <div className={styles.flexcontainer}>
            <div className={styles.flexchild}>
             <img src='https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660246196/explore/WildlifeExplore_r1yvu2.jpg' alt="WildLife Explore"/>
            </div>
            <div className={classnames(styles.flexsecondchild,styles.contentpadding)}>
            <div className={styles.wrap}>
             <div className={styles.backgroundArt}>
               <img src='https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660592490/explore/wildlifeTree_jkjwrl.jpg' alt="wildlife background"/>
             </div>
             <div className={styles.exploretext}>
              <h2>Wildlife</h2>
             
              <p>Connect with Nature.</p>
              <p>Namibia: Namibia is one of our favourite places to go by road because of its vast open landscapes, unending horizons, rippling red rock canyons, and fantastic wildlife viewing.</p>
              <p>South Africa: An adventurous hike can be taken along the spectacular natural border between Lesotho and South Africa. Walk through lush green valleys, scale nerve-wracking chain ladders, and climb to enormous waterfalls.</p>
            </div>
            </div>
           </div> 
          </div>

          <div className={classnames(styles.flexcontainer, styles.ordering)}>
            <div className={classnames(styles.flexsecondchild,styles.contentpadding)}>
            <div className={styles.wrap}>
             <div className={styles.backgroundArt}>
               <img src='https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660602141/explore/Art_Print__Pink_Lavender_World_Map_i4hxs7.jpg' alt="Hiking Background"/>
             </div>
             <div className={styles.exploretext}>
              <h2>Hiking</h2>
              <p >Hiking can lower your risk of heart disease, stroke, high blood pressure, high cholesterol, and several malignancies, like most cardio workouts do.Dolomites, Italy: The Italian Dolomites' breathtaking vistas never fail to astound visitors. The Dolomites is one of our favourite hiking locations, with paths that meander through green meadows, down steep slopes, and over high summits.</p>
            </div>
            </div>
            </div>
            <div className={styles.flexsecondchild}>
            <img src='https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660246202/explore/HikingExplore_zueooz.jpg' alt="Explore Hiking" />
            </div>
          </div>

          <div className={styles.flexcontainer}>
            <div className={styles.flexchild}>
            <img src='https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660246196/explore/BeachesExplore_x8guwu.jpg' alt="Explore Beaches" />
            </div>
            <div className={classnames(styles.flexsecondchild,styles.contentpadding)}>
            <div className={styles.wrap}>
             <div className={styles.backgroundArt}>
               <img src='https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660618607/explore/Travel_rmuijs.jpg' alt="Beaches Background"/>
             </div>
             <div className={styles.exploretext}>
              <h2>Beaches</h2>
              <p>Here comes the Sun and Waves</p>
              <p>Santorini: Santorini may seem like a cliché choice to start the list, but there are several reasons why the picturesque island, which served as the setting for many movies, is regarded as one of Greece's most beautiful. Whitewashed towns with cube-shaped houses that tumble toward the azure sea are etched into the cliffsides. The distinctive buildings in Oia have blue roofs, and the village's breathtaking sunsets make for excellent photo opportunity.</p>
            </div>
    
            </div>
            </div>
          </div>

          <div className={classnames(styles.flexcontainer, styles.ordering)}>
            <div className={classnames(styles.flexsecondchild,styles.contentpadding)}>
            <div className={styles.wrap}>
             <div className={styles.backgroundArt}>
               <img src='https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660600646/explore/Landscape_views_aqufex.png' alt="Mountains Background"/>
             </div>
             <div className={styles.exploretext}>
              <h2>Mountains Getaway</h2>
              <p>Reconnecting with the Nature.</p>
              <p>Never in my life did I claim to be an adventurer or outdoor enthusiast until I started hiking in the mountains.
               It was love at first sight: beautiful lush forests and rolling hills, enchanting turquoise lakes hidden like secret prizes, and breathtaking sky-high crags. But beyond that, hiking in the mountains quickly became a passion because of the way I felt.
               I was able to become who I really am and connect with the version of me that felt  most authentic and true.</p>
            </div>
            </div>
            </div>
            <div className={styles.flexsecondchild}>
            <img src='https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660246201/explore/MountainsExplore_kww4lp.jpg' alt="Explore Mountains"/>
            </div>
          </div>

          <div className={styles.flexcontainer}>
            <div className={styles.flexchild}>
            <img src='https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660246197/explore/FestivalsRajasthanExplore_lzzg6w.jpg' alt="Festivals" />
            </div>
            <div className={classnames(styles.flexsecondchild,styles.contentpadding)}>
            <div className={styles.wrap}>
             <div className={styles.backgroundArt}>
               <img src='https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660600626/explore/TajMahalIndiawatercolor_avhves.jpg' alt="Festivals Background"/>
             </div>
             <div className={styles.exploretext}>
              <h2>Festivals</h2>
              <p>This unforgettable tour through Rajasthan follows the traditional camel caravan routes, passing spectacular forts, elaborate temples, 
              and charming market towns. We wind our way through Rajasthan's "must sights" as well as some undiscovered jewels on the journey from Delhi to Udaipur.

              Visit Amber Fort in Jaipur and Agra to see the breathtaking views of the "Pink City" and the Taj Mahal's sunrise. - Visit the majestic "City of Lakes" of Udaipur, the "Blue City," which sprawls around the magnificent Mehrangarh Fort, and the "Golden City" of Jaisalmer in the heart of the Thar Desert.
             - In a number of ancient palaces and forts throughout Rajasthan, get a Maharajah's night's sleep.</p>
            </div>
            </div>
            </div>
          </div>

          <div className={classnames(styles.flexcontainer, styles.ordering)}>
            <div className={classnames(styles.flexsecondchild,styles.contentpadding)}>
            <div className={styles.wrap}>
             <div className={styles.backgroundArt}>
               <img src='https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660593686/explore/nexttoparchitects_wmxg2r.jpg' alt="Road Trips Background"/>
             </div>
             <div className={styles.exploretext}>
              <h2>Road trips</h2>
              <p>Iceland: A road journey into the central highlands is the finest way to fully experience the majesty of nature in this spectacular landscape, even though many visitors to Iceland consider driving the ring road to be a rite of passage. </p>
              <p>Mexico: Even while Mexico is not the most straightforward destination for a road trip, it is one of the most gratifying. Visit ancient sites buried in jungle, unwind on stunning beaches lined with palm trees, mingle with welcoming locals, and savour delectable local cuisine.</p>
              <p>Namibia: Namibia is one of our favourite places to visit on road trips because of the expansive landscapes and seemingly infinite horizons, the tumbling red rock canyons, and the amazing wildlife viewing.</p>
            </div>
            </div>
            </div>
            <div className={styles.flexsecondchild}>
            <img src='https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660246196/explore/roadTripsExplore_hi6wvw.jpg' alt="Explore Road Trips"/>
            </div>
          </div>
         
         <Imagehover />
        </div>
      </div>
    </div>
  );
}