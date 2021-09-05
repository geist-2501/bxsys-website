import React from 'react';
import styles from './Container.module.scss'
import classes from "../../utils/classes";
import PropTypes from "prop-types";

const Container = ({ children, className, type, ...props }) => {

  const typeClass = type ? styles[type] : ''

  return (
    <div className={classes(className, styles.container, typeClass)} {...props}>
      {children}
    </div>
  );
};

Container.propTypes = {
  type: PropTypes.oneOf(['thin'])
}

export default Container;
