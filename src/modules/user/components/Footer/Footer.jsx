import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineInstagram, AiOutlineTwitter,AiOutlineYoutube } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import Logo from '../../../../assets/Logo.png';
import styles from './Footer.module.css';


export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
    
        <div className={styles.brand}>
        <div className={styles.logo}><Link to='/'><img src={Logo} alt="logo of sea senora"/></Link></div>
          <div className={styles.brandDescription}>
            The website ends here, but your journey to the beautiful destinations
             begins with Sv Sea Senora. Explore with us.
          </div>
        </div>
        <div className={styles.socials}>
          <div className={styles.socialTitle}>social</div>
          <div className={styles.social}>
          <a href="https://www.instagram.com/svseasenora/"target="_blank"rel="noopener noreferrer"  ><AiOutlineInstagram /></a>
            <a href="https://www.youtube.com/channel/UCpaA07tlk3PA44WApp8oKDw"target="_blank" rel="noopener noreferrer"  ><AiOutlineYoutube /></a> 
            <a href="https://www.facebook.com/profile.php?id=100085674495009" target="_blank" rel="noopener noreferrer" ><FaFacebookF /></a>
          </div>
          <div>Copyright © 2022 - {new Date().getFullYear()} SV Sea Senora</div>
          {/* <div className={styles.copyRights}>
            SV Sea Senora © 2022.
            <br /> All Rights Reserved
          </div> */}
        </div>
     
      </div>
    </div>
  );
}
