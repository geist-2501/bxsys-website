import React from 'react';
import styles from './Section.module.scss'
import classes from "../../utils/classes";

const Section = ({type, children}) => {

  const typeClass = type ? styles[type] : '';

  return (
    <div className={classes(styles.section, typeClass)}>
      {children}
    </div>
  );
};

export default Section;
