import React from 'react';
import { useHistory } from 'react-router-dom';

import useGlobalStore from '../../../../store/global.store';
import styles from './Navbar.module.css';

export default function NavBar() {
  const history = useHistory();
  const [setUser] = useGlobalStore((state) => [state.setUser]);
  function handleLogout() {
    setUser(null);
    history.push('/login');
  }
  function handleCreateArticle() {
    history.push('/admin/blog/create');
  }
  return (
    <div className={styles.container}>
      <div className={styles.navLeft}>
        <h1>Admin Portal</h1>
      </div>
      <div className={styles.navRight}>
        <button onClick={handleCreateArticle}>Create Article</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
