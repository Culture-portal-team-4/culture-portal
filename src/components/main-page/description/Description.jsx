import React from 'react';
import data from '../../../data/data.json';
import PropTypes from "prop-types";

Description.propTypes = {
  mainPageData: PropTypes.string,
};
Description.defaultProps = {
  mainPageData: data.mainPage.description,
};

export default function Description({ description }) {
  return (
    <p>{description}</p>
  );
}
