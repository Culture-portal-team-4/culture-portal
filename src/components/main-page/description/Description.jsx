import React from 'react'
import PropTypes from "prop-types"
import styles from './description-styles'

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default function Description({ description }) {
  const classes = styles();

  return (
    <p className={classes.mainRhyme}>{description}</p>
  );
}
