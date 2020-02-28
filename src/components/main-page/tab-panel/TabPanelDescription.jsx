import React from 'react'
import PropTypes from 'prop-types'
import AuthorOfDay from "../author-of-day/AuthorOfDay"
import TeamList from "../../team-page/TeamList"
import ScrollableTabs from "../../elements/ScrollableTabs/ScrollableTabs"
import Description from '../description/Description'

TabPanelDescription.propTypes = {
  mainPageData: PropTypes.object.isRequired,
  developers: PropTypes.array.isRequired,
  photographers: PropTypes.array.isRequired
};

export default function TabPanelDescription({developers, mainPageData, photographers}) {
  const description = mainPageData.description;
  const TITLES = ['Intro', 'Author of the day', 'Developer team'];

  return (
    <ScrollableTabs
      titles={TITLES}
      componentsList={[
        <Description description={description}/>,
        <AuthorOfDay photographers={photographers}/>,
        <TeamList developers={ developers }/>
        ]}
    />
  );
}
