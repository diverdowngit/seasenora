import React from 'react';

import styles from './Layout.module.css';
import NavBar from '../NavBar/NavBar';

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className={styles.body}>{children}</div>
    </>
  );
}
