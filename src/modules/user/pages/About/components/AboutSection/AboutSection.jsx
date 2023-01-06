import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
// import Faqs from '../Faq/Faq.container';
import Owners from '../Owners/Owners';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.aboutWrapper}>
          {/* <img src='https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660858651/users/travelIsGood_ijh4ed.jpg' alt='company' /> */}
          <div className={styles.aboutText}>
            {/* <p>
            VAGARY travells is a specialist travel agency and tour operator in Canada.
            We specialize in tailor-made self-drive holidays and guided private tours all over the world.
            Our aim is to meet and exceed our customer’s expectations through 
            personal service and to offer a wide selection of tours available the whole year round.
            Whether you’re looking for a self-drive tour , a guided group tour, a luxury private tour, 
            family vacation or seasonal holiday, our dedicated team of Vagary travel experts is here to assist you.
            
            </p> */}
            <h1>
              <FaQuoteLeft />
              {` Collect Moments Not Things `}
              <FaQuoteRight />
            </h1>
            {/* <p>
             
            Our Values<br />
            
            
            Flexible: Each traveler has different needs and expectations when it comes to their holidays.
            Our main goal is to ensure that our guests return home with good memories and experiences.
            We are friendly and flexible when it comes to customizing our tours.
            We meet our guests with respect and work continuously to enable everyone
            to travel safely and comfortably on their own terms.<br />
            
            Independent:We’re a team of highly motivated travel professionals who embrace independent work
            and we do our very best so that our guests can travel safely on their own terms.<br />
            
            Trustworthy: 
            Vagary is a fully licensed travel agency and tour operator by the Canadian Tourist Board. 
            Vagary is also highly rated on prestigious websites such as TripAdvisor, Thomas Cook etc.
            </p> */}
           
          </div>
        </div>
        
      </div>
      <div className={styles.owners}>
        <Owners />
      </div>
      {/* <div className={styles.faq}>
        <Faqs />
      </div> */}
    </div>
  );
}
