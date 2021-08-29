import React from 'react';
import styles from './Column.module.scss';
import classes from "../../utils/classes";

const Column = ({children, className: otherClasses, from, to, align}) => {

  const fromClass = from ? styles[`from_${from}`] : styles.from_1;
  const toClass = to ? styles[`to_${to}`] : styles.to_6;
  const alignClass = align ? styles[align] : styles.left;

  return (
    <div className={classes(otherClasses, styles.col, fromClass, toClass, alignClass)}>
      {children}
    </div>
  );
};

export default Column;
