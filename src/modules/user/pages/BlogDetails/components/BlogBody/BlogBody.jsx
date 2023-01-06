import React from 'react';
import draftToHtml from 'draftjs-to-html';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';

import styles from './BlogBody.module.css';

const DEFAULT_CONTENT = {
  entityMap: {},
  blocks: [
    {
      key: '637gr',
      text: `Initialized from content state.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi accusamus hic suscipit asperiores doloribus iure magnam cumque tempora placeat repellendus fugit voluptas, minus enim obcaecati ipsam repellat eius amet aspernatur.
      `,
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
};

export default function BlogBody({ content }) {
  const [blogData, setBlogData] = React.useState(null);
  
  React.useEffect(() => {
    if (content) {
      const decodedContent = JSON.parse(content);
      const editorValue = EditorState.createWithContent(
        convertFromRaw(decodedContent)
      );
      setBlogData(editorValue);
    }
  }, [content]);
  return (
    <div className={styles.container}>
      <div className={styles.blogBodyWrapper}>
        <div
          dangerouslySetInnerHTML={{
            __html: blogData
              ? draftToHtml(convertToRaw(blogData.getCurrentContent()))
              : '',
          }}
        ></div>
      </div>
    </div>
  );
}