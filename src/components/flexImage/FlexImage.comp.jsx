import React from 'react';
import style from './FlexImage.module.scss';
import PropTypes from "prop-types";
import classes from '../../utils/classes';

const FlexImage = ({url, className, type}) => {
  const typeClass = type ? style[type] : '';
  return (
    <div className={classes(style.flex_image, className, typeClass)} style={{"--bg-image": `url(${url})`}} />
  )
}

FlexImage.propTypes = {
  url: PropTypes.string.isRequired
}

export default FlexImage;
