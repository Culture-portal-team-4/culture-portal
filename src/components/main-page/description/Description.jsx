import React from 'react'
import PropTypes from "prop-types"
import styles from './description-styles'
import { withTranslation } from 'react-i18next';

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

function Description({ i18n }) {
  const classes = styles();
  
  return (
    <p className={classes.mainRhyme}>{i18n.t("description")}</p>
  );
}

export default withTranslation()(Description);
