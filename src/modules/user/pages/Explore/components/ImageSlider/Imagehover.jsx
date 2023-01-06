import React from "react";
import styles from './Imagehover.module.css';
import { useState } from "react";



export default function Imagehover(){
    const Default = 'https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660625013/explore/McWayFallsBigSurUS_tn3b0q.jpg';
    const[backgroundImg, setBackgroundImg] = useState(Default);


return(
    <div className={styles.container}>
    <div className={styles.wrap}>
             <img src={backgroundImg} className={styles.backgroundimg} />
             <div className={styles.placestext}>
                 <div 
                 onMouseEnter={() => setBackgroundImg('https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660625277/explore/Oia-Greece_d96air.jpg')}
                 onMouseLeave={() => setBackgroundImg(Default)}
                 >Oia, Greece</div>
                  <div 
                 onMouseEnter={() => setBackgroundImg('https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660625020/explore/Italy_xv0e8z.jpg')}
                 onMouseLeave={() => setBackgroundImg(Default)}
                 >Venice, Italy</div>
                  <div 
                 onMouseEnter={() => setBackgroundImg('https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660625020/explore/Iceland_rggrui.jpg')}
                 onMouseLeave={() => setBackgroundImg(Default)}
                 >Iceland</div>
                  <div 
                 onMouseEnter={() => setBackgroundImg('https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660625016/explore/VernazzaItaly_wtqwzp.jpg')}
                 onMouseLeave={() => setBackgroundImg(Default)}
                 >Vernazza, Italy</div>
             </div>
        <div className={styles.place2}></div>
    </div>
    </div>
    );
}