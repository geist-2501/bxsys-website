import React from 'react';
import styles from './Column.module.scss';
import classes from "../../utils/classes";

const Column = ({children, className: otherClasses, from, to}) => {

  const fromClass = from ? styles[`from_${from}`] : styles.from_1;
  const toClass = to ? styles[`to_${to}`] : styles.to_6;

  return (
    <div className={classes(styles.col, fromClass, toClass, otherClasses)}>
      {children}
    </div>
  );
};

export default Column;
