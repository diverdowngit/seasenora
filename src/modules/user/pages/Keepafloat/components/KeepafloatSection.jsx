import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import styles from './KeepafloatSection.module.css';

export default function KeepafloatSection() {
  return (
    <div className={styles.container}>
  
    <div className={styles.bookingwrapper}>
    <div className={styles.wrapper}>  <img src='img/patreon-icon.png'  href="https://www.patreon.com/user?u=84347902"alt='patron' width="50" 
       height="50" /> 
      {/* </div
          <div className={styles.aboutText}> 
            <p>We Are Fred, Sandra And Maya and I am [describe your position/situation/background]. My organization launched our [name of online fundraiser] today. Our goal is to reach [antount] to [project, event, cause you're raising money for]. 
[If possible, add a personal connection to tie the donor to your cause. For instanire, if you're raising money to create a program that provides kids with toys for the holidays and you 're writing to a father, emphasize how grateful the children will be to receive a toy from their parents]. 
Just a small donation of[amount] will help me accomplish [explain exactly ho\\"that contribution \\ill make a difference]. 
You can make contributions on our crowclfunding page [link to page]. If you can't give, but still want to support our cause, please share our page ,vith your friends, family n1en1bers, a111d coworkers. \Vith more people aware of our cause, \\'e'll be one step closer to reaching our goal. 
We would like to thank you in advance for your support! 
          
            </p>
        
             <h1>
              <FaQuoteLeft />
              {` Book with us `}
              <FaQuoteRight />
            </h1>  */}
              
        </div>
         <div className={styles.staywrapper}>
        <div className={styles.aboutCards}>
         <h1 className='cardsHeadings'>Become A Patreon</h1>
         <p>
        You can make contributions on our Patreon page ( Button Below ). If you can't give, but still want to support our cause, please share our page with your friends, family Members, and coworkers. With more people aware of our Adventure, We would be one step closer to reaching our goal. 
We would like to thank you in advance for your support! 
          
       </p>
              <a href="https://www.patreon.com/user?u=84347902" alt='patron' target="_blank" rel="noopener noreferrer" >
          <button  href="https://www.patreon.com/user?u=84347902"alt='patron' >Patreon</button>
        </a>
        </div>
        </div> 

         <div className={styles.staywrapper}>
        <div className={styles.aboutCards}>
         <h1>PayPal</h1>
         <p>
        If you would like to make a One time donation click the button below to go to our PayPal page We would like to thank you in advance for your support! </p>
         
              <a href="https://www.paypal.com" target="_blank" rel="noreferrer">
          <button aria-label="PayPal">PayPal</button></a>
        </div>
        </div> 

        {/* <div className={styles.staywrapper}>
        <div className={styles.aboutCards}>
         <h1 >3- Accomodation</h1>
         <p> Airbnb, a service that lets property owners rent out their spaces to travelers looking for a place to stay.Here, you may discover unique homes, beach houses, holiday rentals, and experiences all over the world.</p>
         
              <a href="https://www.airbnb.ca/" target="_blank" rel="noreferrer">
          <button aria-label="airbnb">airbnb</button></a>
        </div>
        </div>
        
        <div className={styles.staywrapper}>
        <div className={styles.aboutCards}>
         <h1>4- Book your Flights</h1>
         <p>We pledge to help you find cheap flights that won't bust your budget.
           that's why we provide you with a vast selection of affordable plane tickets, including roundtrip and one-way reservations,
           to ensure your travel plans remain within your budget. Take advantage of our lowest rates on airfare and have 
           leftover money to spare on sightseeing.
           We offer a wealth of airlines, airports, and arrival times, making it easy for you to book your trip.</p>
         
              <a href="https://www.google.com/travel/flights" target="_blank" rel="noreferrer">
          <button aria-label="book flights">Flights</button></a>
        </div>
        </div> */}

        {/* <div className={styles.staywrapper}>
        <div className={styles.aboutCards}>
         <h1>5- Car Rentals</h1>
         <p>Vagary makes it easy for you to book your next car rental. We work with the best car rental companies in Canada, bringing you discount car rental rates and a wide variety of car rental classes including economy, compact, midsize, full-size, convertible, van, luxury, full size and SUV rentals. Our partner car rental companies in Canada offer different pick-up and drop-off options. If you are ready to book your car rental, follow the links on this page to view more information and details on your next short or long term car rental.</p>
         
              <a href="https://turo.com/" target="_blank" rel="noreferrer">
          <button aria-label="book rental cars">Book your Car</button></a>
        </div>
        </div> */}

        {/* <div className={styles.staywrapper}>
        <div className={styles.aboutCards}>
         <h1>6- Activities</h1>
         <p>Activities are the next item you might want to plan ahead for. While exploring a new city on foot and letting chance lead you might be wonderful, 
         there are times when you want to be more prepared. To help you spend more time gathering unforgettable experiences and less time searching for them,
          our itineraries cover the order that we believe you should see things.

          This enables you to avoid lines by making reservations in advance for popular attractions.
           Get Your Guide, a dependable partner for attractions, offers a wide variety of activities,
            a user-friendly design, and client testimonials. Additionally, they will mail tickets directly to your smartphone.</p>
         
              <a href="https://www.getyourguide.com/" target="_blank" rel="noreferrer">
          <button aria-label="activities">Activities</button></a>
        </div>
        </div> */}

        {/* <div className={styles.staywrapper}>
        <div className={styles.aboutCards}>
         <h1>7- Insurance</h1>
         <p>One of the first things you should think about purchasing when going is travel insurance. 
         It is a form of financial insurance against unanticipated occurrences like unexpected medical expenses, 
         a cancelled flight, or assets theft. Although travellers can exercise the greatest caution, there is always a chance of the unforeseen, thus it is essential to be as prepared as possible for this. 
         You can unwind and travel without stress.</p>
         
              <a href="https://www.worldnomads.com//" target="_blank" rel="noreferrer">
          <button aria-label="insurance">worldnomads</button></a>
        </div>
        </div> */}
    </div>
  </div>

  

  );
}