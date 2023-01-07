import React from 'react';
import { API_URL } from "../../../../utils/constants";
import Layout from '../../components/Layout/Layout';
import EWV from './components/EWV/EWV';
import Hero from './components/Hero/Hero';
import LatestBlog from './components/LatestBlog/LatestBlog';
import PopularPlaces from './components/PopularPlaces/PopularPlaces';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import SummerCards from './components/SummerCards/SummerCards';
import VideoHome from './components/VideoHome/VideoHome';



export default function HomePageView() {

  const [blogList, setBlogList] = React.useState([]);

  React.useEffect(() => {
    getBlogItems()
  }, []);

  async function getBlogItems() {
    try {
      const response = await fetch(`${API_URL}/blogs/latest`);
      const data = await response.json();
      setBlogList(data.blogs);
    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <Layout>
      <Hero img="/img/heroimage.jpg" centerText="Welcome to SV Sea Senora " location="WorldWide."font-family=" 'Luminari', sans-serif;"/>
      {/* <VideoHome centerText="Plan Your Next Adventure" location="Parisian Bridge, Paris, France" /> */}
      <EWV />
      {/* <PopularPlaces /> */}
      {/* <LatestBlog data={blogList}/>
      <PhotoGallery /> */}
      {/* <SummerCards /> */}
     
    </Layout>

  );
}
