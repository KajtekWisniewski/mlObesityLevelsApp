'use client';
import Link from 'next/link';
import styles from './NavBar.module.scss';
import Image from 'next/image';

const NavBar = ({}) => {
  return (
    <>
      <nav className={styles.navbar}>
        <Link className={styles.linkStyle} href={`/`}>
          <Image src="/logo_transparent.png" width={75} height={75} alt="site logo" />
        </Link>
        <Link className={styles.linkStyle} href={`/evaluate/`}>
          <h2>FIND OUT YOUR OBESITY LEVEL</h2>
        </Link>
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
