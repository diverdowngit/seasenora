import React from 'react';

import Layout from '../../components/Layout/Layout';
import Hero from '../Home/components/Hero/Hero';
import KeepafloatSection from './components/KeepafloatSection';

export default function KeepafloatView() {
  return (
    <Layout>
    <Hero img="/img/sailboat-2133663_1920.jpg" centerText="Thanks for Keeping us Afloat and off the Rocks " location=""/>
      <KeepafloatSection />
    </Layout>
  );
}
