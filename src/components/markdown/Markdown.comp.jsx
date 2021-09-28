import React from 'react';
import styles from './Markdown.module.scss';

const Markdown = ({children}) => {
  return (
    <div className={styles.markdown}>
      {children}
    </div>
  );
};

export default Markdown;
