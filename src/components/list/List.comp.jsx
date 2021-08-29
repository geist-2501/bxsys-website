import React from 'react';
import styles from './List.module.scss';

const List = ({children}) => {
  return (
    <div className={styles.list}>
      {children.map((c, i) => (
        <div className={styles.list_item} key={i}>
          <div className={styles.side}>
            <div className={styles.circle} />
            <div className={styles.line} />
          </div>
          {c}
        </div>
      ))}
    </div>
  );
};

export default List;
