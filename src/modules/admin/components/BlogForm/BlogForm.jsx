import React from 'react';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import styles from './BlogForm.module.css';
import { API_URL } from '../../../../utils/constants';
import useGlobalStore from '../../../../store/global.store';
import { useHistory } from 'react-router-dom';

export default function BlogForm({
  data = null,
  editorStateData = null,
  mode = null,
  submitBlogHandler,
}) {
  const [user] = useGlobalStore((state) => [state.user]);
  const history = useHistory();
  const [blogData, setBlogData] = React.useState({
    title: '',
    slug: '',
    location: '',
    image: '',
    published: false,
    short_desc: '',
  });
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  React.useEffect(() => {
    if (data) {
      setBlogData((state) => {
        return { ...state, ...data };
      });
    }
  }, [data]);

  React.useEffect(() => {
    if (editorStateData) {
      const editorValue = EditorState.createWithContent(
        convertFromRaw(editorStateData)
      );
      setEditorState(editorValue);
    }
  }, [editorStateData]);

  function onEditorChange(editorState) {
    setEditorState(editorState);
  }

  function handleInputChange(evt) {
    const { name, value, files } = evt.target;

    if (files?.length) {
      setBlogData((blogData) => ({
        ...blogData,
        image: files[0],
      }));
      return;
    }

    if (name === 'title') {
      const slug = value.toLowerCase().replace(/\W+/g, '-');
      setBlogData((blogData) => ({
        ...blogData,
        slug,
      }));
    }

    setBlogData((blogData) => ({
      ...blogData,
      [name]: value,
    }));
  }

  function handleSubmit() {
    const blogForm = new FormData();

    for (const key in blogData) {
      if (blogData[key]) {
        blogForm.append(key, blogData[key]);
      }
    }

    blogForm.append(
      'body',
      JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    );

    submitBlogHandler(blogForm);
  }

  return (
    <div className={styles.container}>
      <input
        onChange={handleInputChange}
        name='title'
        type='text'
        placeholder='Title'
        value={blogData.title}
      />
      <input
        onChange={handleInputChange}
        name='short_desc'
        type='text'
        placeholder='Short Description'
        value={blogData.short_desc}
      />
      <input
        value={blogData.slug}
        name='slug'
        disabled
        type='text'
        placeholder='Slug'
      />
      <input
        onChange={handleInputChange}
        name='location'
        type='text'
        placeholder='Location'
        value={blogData.location}
      />
      <input
        onChange={handleInputChange}
        name='image'
        type='file'
        placeholder='Image'
      />
      <select name='published' onChange={handleInputChange}>
        <option value={false}>Save as draft</option>
        <option value={true}>Publish</option>
      </select>
      <Editor
        editorState={editorState}
        wrapperClassName='demo-wrapper'
        editorClassName={styles.rdwWrapper}
        onEditorStateChange={onEditorChange}
      />
      <div className={styles.actionButtons}>
        <button>Cancel</button>
        <button onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
}
