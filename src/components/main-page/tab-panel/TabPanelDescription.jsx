import React from 'react'
import PropTypes from 'prop-types'
import AuthorOfDay from '../author-of-day/AuthorOfDay'
import TeamList from '../../team-page/TeamList'
import ScrollableTabs from '../../elements/ScrollableTabs/ScrollableTabs'
import Description from '../description/Description'
import { withTranslation } from 'react-i18next'

TabPanelDescription.propTypes = {
  mainPageData: PropTypes.object
}

function TabPanelDescription({
  developers,
  mainPageData,
  photographers,
  i18n
}) {
  const description = mainPageData.description
  const TITLES = [
    i18n.t('intro'),
    i18n.t('authorOfTheDay'),
    i18n.t('developerTeam')
  ]

  return (
    <ScrollableTabs
      titles={TITLES}
      componentsList={[
        <Description description={description} />,
        <AuthorOfDay photographers={photographers} />,
        <TeamList showTitle={false} developers={developers} />
      ]}
    />
  )
}

export default withTranslation()(TabPanelDescription)
