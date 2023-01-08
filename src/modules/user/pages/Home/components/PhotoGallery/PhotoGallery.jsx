import React from "react";
import styles from './PhotoGallery.module.css';
import classnames from 'classnames';

import Navbar from "../../../../components/Navbar/Navbar";
import Layout from "../../../../components/Layout/Layout";
export default function PhotoGallery() {
    return (  
      <Layout>
     <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.headingGrid}>Photo Gallery</h2>
          <div className={styles.containerimg}>
            <div className={styles.gallery}>
              <div className={classnames(styles.imggrid1, styles.singlecolumn)}><img className={styles.galleryimg} src="img/gridimg1.jpg" alt="" /><p className={styles.gridText}>Wadi Musa, Ma'an Governorate, Jordan</p></div>
              <div className={classnames(styles.imggrid2, styles.singlecolumn)}><img className={styles.galleryimg} src="img/gridimg2.jpg" alt="" /><p className={styles.gridText}>Cliffside Village</p></div>
              <div className={styles.imggrid3}><img className={styles.galleryimg} src="img/gridimg3.jpg" alt="" /><p className={styles.gridText}>Breathtaking seascape with amazing coastal village on cliff</p></div>
              <div className={styles.imggrid4}><img className={styles.galleryimg} src="img/gridimg4.jpg" alt="" /><p className={styles.gridText}> Buildings and Canal during Night time</p></div>
              <div className={styles.imggrid5}><img className={styles.galleryimg} src="img/gridimg5.jpg" alt="" /><p className={styles.gridText}>Riva del Garda, Trentino-Alto Adige, Italy</p></div>
              <div className={styles.imggrid6}><img className={styles.galleryimg} src="img/gridimg6.jpg" alt="" /><p className={styles.gridText}>Bali, Indonesia</p></div>
            </div>
          </div>
        </div>
        {/* <div className={styles.doodle}><img src="https://pixabay.com/de/photos/embudu-insel-urlaub-meer-ozean-4026462/"></img></div>  */}
      </div>
      
      </Layout>
    );
}