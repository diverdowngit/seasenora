import React from 'react';
import { useHistory } from 'react-router-dom';

import { API_URL } from '../../../../utils/constants';
import Layout from '../../components/Layout/Layout';
import BlogCard from './components/BlogCard/BlogCard';
import styles from './Home.module.css';
import useGlobalStore from '../../../../store/global.store';

export default function HomeView() {
  const history = useHistory();
  const [user] = useGlobalStore((state) => [state.user]);
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    getAllBlogs();
  }, []);

  async function getAllBlogs() {
    try {
      const data = await fetch(`${API_URL}/blogs`);
      const response = await data.json();
      const blogs = response?.blogs ?? [];
      setBlogs(blogs);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleOptionClick(type, id) {
    if (type === 'edit') {
      history.push(`/admin/blog/edit/${id}`);
    }
    if (type === 'delete') {
      const accessToken = user?.token;
      await fetch(`${API_URL}/blog/delete/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: accessToken,
        },
      });
      await getAllBlogs();
    }
  }
  return (
    <Layout>
      <div className={styles.container}>
        {blogs.map((blog) => (
          <BlogCard
            id={blog._id}
            title={blog.title}
            img={blog.image.secure_url}
            short_desc={blog.short_desc}
            authorName={blog.author.name}
            handleOptionClick={handleOptionClick}
          />
        ))}
      </div>
    </Layout>
  );
}
