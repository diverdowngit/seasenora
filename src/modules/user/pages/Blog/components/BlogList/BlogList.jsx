import React from 'react';
import BlogCard from '../../../Home/components/LatestBlog/components/BlogCard/BlogCard';
import { API_URL } from '../../../../../../utils/constants';
import styles from './BlogList.module.css';

export default function BlogList() {

  const [blogList, setBlogList] = React.useState([]);
  const [visible, setVisible] = React.useState(3);
  const [bloglength, setBloglength] = React.useState();

  React.useEffect(() => {
    getBlogItems()
  }, []);

  async function getBlogItems() { 
    try {
      const response = await fetch(`${API_URL}/post`);
      const data = await response.json();
      setBlogList(data.blogs);
      setBloglength(data.blogs.length);
      // console.log(data.blogs.length);
    } catch (error) {
      console.log({ error });
    }
  }

  const loadMoreItems = () => {
    setVisible((preValue) => preValue + 3);
    const buttonvisibility = document.getElementById("hidebutton");
    console.log(visible);
    if (visible+3 >= bloglength){
      buttonvisibility.style.visibility="hidden";
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Blogs</h1>
        <div className={styles.blogList}>
          {blogList.slice(0,visible).map(({ title, short_desc, image, author, _id }) => (
            <BlogCard id={_id} title={title} short_desc={short_desc} img={image.secure_url} authorName={author.name} />
          ))}
        </div>
        <div className={styles.loadMore}> <h1>Under Construction Check Back Soon</h1>
          {/* <button onClick={loadMoreItems}  id="hidebutton">Load More</button> */}
        </div>
      </div>
    </div>
  );
}