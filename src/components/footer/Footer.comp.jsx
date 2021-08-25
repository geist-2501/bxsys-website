import React from 'react';
import styles from './Footer.module.scss';
import {LinkedInLink} from "../mediaLink/MediaLink.comp";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>BXSYS &copy; 2021</p>
      <LinkedInLink />
    </div>
  );
};

export default Footer;
