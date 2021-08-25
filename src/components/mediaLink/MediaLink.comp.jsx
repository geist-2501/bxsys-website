import React from 'react';
import styles from './MediaLink.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const MediaLink = ({src, href}) => {
  return (
    <Link href={href}>
      <a href={href} className={styles.link}>
        <FontAwesomeIcon icon={src} />
      </a>
    </Link>
  );
};

export const LinkedInLink = () => <MediaLink src={faLinkedin} href="https://www.linkedin.com/in/blair-cross/" />
export const GithubLink = () => <MediaLink src={faGithub} href="https://github.com/geist-2501" />

export default MediaLink;
