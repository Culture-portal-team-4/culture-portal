import React from 'react'
import data from '../../../data/data.json'
import PropTypes from "prop-types"
import styles from './description-styles'
import { withTranslation } from 'react-i18next';

Description.propTypes = {
  mainPageData: PropTypes.string,
};
Description.defaultProps = {
  mainPageData: data.mainPage.description,
};

function Description({ i18n }) {
  const classes = styles();
  
  return (
    <p className={classes.mainRhyme}>{i18n.t("description")}</p>
  );
}

export default withTranslation()(Description);
