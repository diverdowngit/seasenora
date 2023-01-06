import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useGlobalStore from '../../../../store/global.store';
import { API_URL } from '../../../../utils/constants';

import BlogForm from '../../components/BlogForm/BlogForm';
import Layout from '../../components/Layout/Layout';

export default function EditBlogView() {
  const { id } = useParams();
  const history = useHistory();
  const [user] = useGlobalStore((state) => [state.user]);
  const [blogData, setBlogData] = React.useState({
    title: '',
    slug: '',
    location: '',
    published: false,
    short_desc: '',
  });
  const [editorState, setEditorState] = React.useState(null);

  React.useEffect(() => {
    getSingleBlogDetails();
  }, []);

  async function getSingleBlogDetails() {
    const accessToken = user?.token;
    try {
      const data = await fetch(`${API_URL}/blogs/${id}`, {
        method: 'GET',
        headers: {
          Authorization: accessToken,
        },
      });
      const response = await data.json();
      const { title, slug, body, location, published, short_desc } =
        response.blog;
      const parsedEditorState = JSON.parse(body);
      setBlogData({ title, slug, location, published, short_desc });
      setEditorState(parsedEditorState);
    } catch (error) {}
  }

  async function submitBlogHandler(formData) {
    const accessToken = user?.token;

    try {
      const response = await fetch(`${API_URL}/blog/update/${id}`, {
        method: 'PUT',
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
      <BlogForm
        submitBlogHandler={submitBlogHandler}
        data={blogData}
        editorStateData={editorState ?? undefined}
      />
    </Layout>
  );
}
