import React from 'react';

import styles from "./Error.module.css"

export default function ErrorWrapper({ error, children }) {
  return (
    <div className={styles.container}>
      {error && <span style={{ color: 'red' }}>{error}</span>}
      {children}
    </div>
  );
}
