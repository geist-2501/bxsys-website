import React from 'react';
import styles from './MediaLink.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const MediaLink = ({src, href}) => {
  return (
    <Link href={href}>
      <a href={href} className={styles.link}>
        <i className="fab fa-linkedin"/>
      </a>
    </Link>
  );
};

export const LinkedInLink = () => <MediaLink src="/linkedin.png" href="https://www.linkedin.com/in/blair-cross/" />

export default MediaLink;
