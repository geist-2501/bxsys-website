import React from 'react';
import styles from './Bullet.module.scss';
import classes from "../../utils/classes";

const Bullet = ({className, ...props}) => {
  return (
    <div className={classes(styles.bullet, className)} {...props} />
  );
};

export default Bullet;
