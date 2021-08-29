import React from 'react';
import styles from './Button.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Button = ({href, children}) => {
  return (
    <Link href={href}>
      <a href={href} className={styles.button}>
        <div className={styles.arrow}>
          <Image src="/arrow-l.svg" width={50} height={10}/>
        </div>
        <div>
          {children}
        </div>
      </a>
    </Link>
  );
};

export default Button;
