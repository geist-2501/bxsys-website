import React from 'react';
import styles from './MediaLink.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import classes from "../../utils/classes";

const MediaLink = ({src, size, href}) => {

  const sizeClass = size ? styles[size] : ''

  return (
    <Link href={href}>
      <a href={href} className={classes(styles.link, sizeClass)} target='_blank' >
        <FontAwesomeIcon icon={src} />
      </a>
    </Link>
  );
};

export const LinkedInLink = (props) => <MediaLink src={faLinkedin} href="https://www.linkedin.com/in/blair-cross/" {...props} />
export const GithubLink = (props) => <MediaLink src={faGithub} href="https://github.com/geist-2501" {...props} />

export default MediaLink;
