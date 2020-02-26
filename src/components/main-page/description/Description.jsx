import React from 'react'
import data from '../../../data/data.json'
import PropTypes from "prop-types"
import styles from './description-styles'

Description.propTypes = {
  mainPageData: PropTypes.string,
};
Description.defaultProps = {
  mainPageData: data.mainPage.description,
};

export default function Description({ description }) {
  const classes = styles();

  return (
    <p className={classes.mainRhyme}>{description}</p>
  );
}
