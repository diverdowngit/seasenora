import React from "react";
import { useParams } from "react-router-dom";

import { API_URL } from "../../../../utils/constants";
import Layout from "../../components/Layout/Layout";
import BlogBody from "./components/BlogBody/BlogBody";
import BlogHeader from "./components/BlogHeader/BlogHeader";

export default function BlogDetailsView() {
  const { id } = useParams();
  const [content, setContent] = React.useState(null);
  const [blogData, setBlogData] = React.useState({
    title: "",
    location: "",
    image: "",
  });
  React.useEffect(() => {
    getSingleBlog();
  }, [id]);
  async function getSingleBlog() {
    try {
      const data = await fetch(`${API_URL}/post/${id}`);
      const response = await data.json();
      const { title, location, image, body } = response.blog;
     
      setContent(body);
      setBlogData({ title, location, image: image.secure_url });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Layout>
      <BlogHeader 
        title={blogData.title}
        location={blogData.location}
        image={blogData.image}
      />
     
      <BlogBody content={content} />
    </Layout>
  );
}
