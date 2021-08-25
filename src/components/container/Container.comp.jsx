import React from 'react';
import styles from './Container.module.scss'
import classes from "../../utils/classes";

const Container = ({ children, className, ...props }) => {
  return (
    <div className={classes(styles.container, className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
