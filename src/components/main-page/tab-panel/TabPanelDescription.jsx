import React from 'react'
import PropTypes from 'prop-types'
import data from '../../../data/data'
import AuthorOfDay from '../author-of-day/AuthorOfDay'
import TeamList from '../../team-page/TeamList'
import ScrollableTabs from '../../elements/ScrollableTabs/ScrollableTabs'
import Description from '../description/Description'

TabPanelDescription.propTypes = {
  mainPageData: PropTypes.object
}
TabPanelDescription.defaultProps = {
  mainPageData: data.mainPage
}

export default function TabPanelDescription(props) {
  const description = props.mainPageData.description
  const TITLES = ['Intro', 'Author of the day', 'Developer team']

  return (
    <ScrollableTabs
      titles={TITLES}
      componentsList={[
        <Description description={description} />,
        <AuthorOfDay randomAuthorData={props.randomAuthorData} />,
        <TeamList showTitle={false} />
      ]}
    />
  )
}
