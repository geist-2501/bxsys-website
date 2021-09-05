import React from 'react';
import styles from './Section.module.scss'
import classes from "../../utils/classes";
import PropTypes from "prop-types";

const Section = ({type, hidden, children}) => {

  if (hidden) return <></>;

  const typeClass = type ? styles[type] : '';

  return (
    <div className={classes(styles.section, typeClass)}>
      {children}
    </div>
  );
};

Section.propTypes = {
  type: PropTypes.oneOf(['hero', 'lead'])
}

export default Section;
