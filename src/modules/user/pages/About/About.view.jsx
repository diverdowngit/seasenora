import React from 'react';
import Footer from '../../components/Footer/Footer';
import Layout from '../../components/Layout/Layout';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../Home/components/Hero/Hero';
import AboutSection from './components/AboutSection/AboutSection';

export default function AboutView() {
  return (
   <>
   <Navbar/>
       <Hero img="/img/aboutTravel1.jpg" centerText="Our Passion For Travel Is The Foundation Of Sv Sea Senora." subheading="Our Traveles  Take You With Us Off-the-beaten-path To Hidden Gems." location="About Us Page "/>
      <AboutSection />
    <Footer/>
      </>
  );
}
