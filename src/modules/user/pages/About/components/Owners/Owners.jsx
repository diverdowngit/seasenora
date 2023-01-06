import React from "react";
import styles from "./Owners.module.css";


export default function Owners() {
    return (
        <div className={styles.container}>
        <div> <h2 className={styles.adminTravel}>About Us</h2>
        <p className={styles.adminText}>Hello We Are Fred, Sandra and Maya. We wanted to share our experiences with others all across the world, so we started Sv Sea Senora. to increase the rewards of well-known sites and the accessibility of off-the-beaten-path locations.</p>

        <p className={styles.adminText}>   Both textual and visual storytelling are our passions.
                 That's why we made the decision to start a simple  <a href="https://www.youtube.com/@svseasenora"target="_blank" rel="noopener noreferrer"><img className={styles.imgsiz}
            src="/img/youtube-logo.png"
            alt="youtube"
          /></a>YouTube Site / travel blog. 
                People require knowledge about various locations, and we firmly believe that a picture is worth a thousand words. We set out to create a website with essential data. in order to save people time from visiting many websites.</p></div>
        <div className={styles.alignImages}>
            <div className={styles.column}></div>
            {/* <div className={styles.column}><img src="https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660681098/users/navjotTravel_x4ugb4.jpg" className={styles.imgsiz}/></div> */}
            {/* <div className={styles.column}><img src="https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660682976/users/Vaishali-Travel_f26rwt.jpg" className={styles.imgsiz}/></div> */}
        </div>
        <div className={styles.alignImages2}>
            {/* <div className={styles.column}><img src="https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660682484/users/Brinda-Travel_mluidp.jpg" className={styles.imgsiz}/></div> */}
            {/* <div className={styles.column}><img src="https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660683418/users/yashwanthTravel_bo0jkt.jpg" className={styles.imgsiz}/></div> */}
        </div>
        </div>
    )
}