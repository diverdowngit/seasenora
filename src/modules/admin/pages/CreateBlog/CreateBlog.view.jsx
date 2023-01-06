import React from 'react';
import { useHistory } from 'react-router-dom';
import useGlobalStore from '../../../../store/global.store';

import { API_URL } from '../../../../utils/constants';
import BlogForm from '../../components/BlogForm/BlogForm';
import Layout from '../../components/Layout/Layout';

export default function CreateBlogView() {
  const history = useHistory();
  const [user] = useGlobalStore((state) => [state.user]);

  async function submitBlogHandler(formData) {
    const accessToken = user?.token;

    try {
      const response = await fetch(`${API_URL}/blog/add`, {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: accessToken,
        },
      });
      const data = await response.json();
      history.push('/admin/home');
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Layout>
      <BlogForm submitBlogHandler={submitBlogHandler} />
    </Layout>
  );
}
