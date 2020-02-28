import React from 'react'
import PropTypes from 'prop-types'
import data from "../../../data/data"
import AuthorOfDay from "../author-of-day/AuthorOfDay"
import TeamList from "../../team-page/TeamList"
import ScrollableTabs from "../../elements/ScrollableTabs/ScrollableTabs"
import Description from '../description/Description'
import { withTranslation } from 'react-i18next';

TabPanelDescription.propTypes = {
  mainPageData: PropTypes.object
};
TabPanelDescription.defaultProps = {
  mainPageData: data.mainPage,
};

function TabPanelDescription(props) {
  const { i18n } = props;
  const description = props.mainPageData.description;
  const TITLES = [i18n.t("intro"), i18n.t("authorOfTheDay"), i18n.t("developerTeam")]

  return (
    <ScrollableTabs
      titles={TITLES}
      componentsList={[<Description description={description}/>, <AuthorOfDay randomAuthorData={props.randomAuthorData}/>, <TeamList/>]}
    />
  );
}

export default withTranslation()(TabPanelDescription);
