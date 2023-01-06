import React from 'react';
import BlogCard from './components/BlogCard/BlogCard';

import styles from './LatestBlog.module.css';

export default function LatestBlog({data}) {
  // const data = [
  //   {
  //     title: 'WHERE TO STAY IN CHICAGO: THE BEST NEIGHBORHOODS FOR YOUR VISIT',
  //     short_desc:
  //       'Chicago is famous for many things: the historic architecture, the dining scene is top-notch, Millennium Park, art museums, and, of course, the Cubs. You’ll be able to fill as much time as you have hear with a variety of activities.',
  //     img: 'https://media.nomadicmatt.com/2022/chicagostay.jpeg',
  //   },
  //   {
  //     title: 'THE 6 BEST HOSTELS IN OAXACA',
  //     short_desc:
  //       'Chicago is famous for many things: the historic architecture, the dining scene is top-notch, Millennium Park, art museums, and, of course, the Cubs. You’ll be able to fill as much time as you have hear with a variety of activities.',
  //     img: 'https://media.nomadicmatt.com/2022/bestoaxacahostels.jpeg',
  //   },
  //   {
  //     title: 'WHY TRAVEL MAKES YOU AWESOME',
  //     short_desc:
  //       'People always ask how travel has changed me. If I look back at who I was before I began traveling and compare that to',
  //     img: 'https://res.cloudinary.com/dkhvcn7i6/image/upload/v1659634998/users/bcvvmtzk29hs9a799cor.jpg',
  //   },
  // ];
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Our latest Blogs</h2>
        <div className={styles.latestBlogList}>
        {data.map(({ title, short_desc, image, author, _id }) => (
            <BlogCard id={_id} title={title} short_desc={short_desc} img={image.secure_url} authorName={author.name} />
          ))}
           </div>
      </div>
    </div>
  );
}
