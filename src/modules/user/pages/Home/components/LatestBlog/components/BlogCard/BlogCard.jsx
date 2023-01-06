import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useHistory } from "react-router-dom";

import styles from "./BlogCard.module.css";

export default function BlogCard({
  img,
  title,
  short_desc,
  authorName = "VMBYN",
  id,
}) {
  const history = useHistory();
  function handleBlogCardClick() {
    history.push(`/blog/${id}`);
  }
  return (
    <div onClick={handleBlogCardClick} className={styles.container}>
      <img src={img} alt="" />
      <div className={styles.blogDetails}>
        <h4>{title}</h4>
        <p>{short_desc}</p>
      </div>
      <div className={styles.blogAuthor}>
        <FaUserCircle />
        <span>{authorName}</span>
      </div>
    </div>
  );
}
