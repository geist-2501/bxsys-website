import React from 'react';
import styles from './MediaLink.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import classes from "../../utils/classes";
import orDefault from '../../utils/orDefault';

const MediaLink = ({src, size, href}) => {

  const sizeClass = size ? styles[size] : ''

  return (
    <Link href={href}>
      <a href={href} className={classes(styles.link, sizeClass)} target='_blank' rel="noreferrer" >
        <FontAwesomeIcon icon={src} />
      </a>
    </Link>
  );
};

export const LinkedInLink = ({url, ...props}) => <MediaLink 
  src={faLinkedin} 
  href={orDefault(url, "https://www.linkedin.com/in/blair-cross/")} 
  {...props} 
/>

export const GithubLink = ({url, ...props}) => <MediaLink 
  src={faGithub} 
  href={orDefault(url, "https://github.com/geist-2501")}
  {...props} 
/>

export default MediaLink;
