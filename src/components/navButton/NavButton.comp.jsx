import React from 'react';
import styles from './NavButton.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const NavButton = ({children, href, ...props}) => {
  return (
    <Link href={href} {...props}>
      <a className={styles.button}>
        <div className={styles.arrow} >
          <Image src="/arrow.svg" alt="SVG of an arrow" height={15} width={15} />
        </div>
        {children}
      </a>
    </Link>
  );
};

export default NavButton;
