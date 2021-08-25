import React from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import Logo from "../logo/Logo.comp";
import NavButton from "../navButton/NavButton.comp";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>
            <Logo />
          </a>
        </Link>
      </div>
      <nav className={styles.links}>
        <NavButton href={'/'}>Index</NavButton>
        <NavButton href={'/blog'}>Blog</NavButton>
        <NavButton href={'/portfolio'}>Portfolio</NavButton>
      </nav>
    </div>
  );
};

export default Navbar;
