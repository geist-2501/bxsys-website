import React from 'react';
import styles from './Footer.module.scss';
import {GithubLink, LinkedInLink} from "../mediaLink/MediaLink.comp";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}><span>BXSYS</span> &copy; 2021</p>
      <LinkedInLink />
      <GithubLink />
    </div>
  );
};

export default Footer;
