import React from 'react';
import { FaUserCircle, FaPen, FaTrash } from 'react-icons/fa';

import styles from './BlogCard.module.css';

export default function BlogCard({
  id,
  img,
  title,
  short_desc,
  authorName,
  handleOptionClick,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <FaPen onClick={() => handleOptionClick('edit', id)} />
        <FaTrash onClick={() => handleOptionClick('delete', id)} />
      </div>
      <img src={img} alt='' />
      <div className={styles.blogDetails}>
        <h4>{title}</h4>
        <p>{short_desc || 'This is a short description'}</p>
      </div>
      <div className={styles.blogAuthor}>
        <FaUserCircle />
        <span>{authorName}</span>
      </div>
    </div>
  );
}
