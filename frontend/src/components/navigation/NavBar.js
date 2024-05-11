'use client';
import Link from 'next/link';
import styles from './NavBar.module.scss';

const NavBar = ({}) => {
  return (
    <>
      <nav className={styles.navbar}>
        <Link className={styles.linkStyle} href={`/about/`}>
          <h2>ABOUT</h2>
        </Link>
        <Link className={styles.linkStyle} href={`/model/`}>
          <h2>MODEL</h2>
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
