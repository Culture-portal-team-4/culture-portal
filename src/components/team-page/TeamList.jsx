import React from 'react'
import TeamListItem from './TeamListItem'
import { Grid, Typography, Box } from '@material-ui/core'
import { withTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

function TeamList({ developers, i18n, showTitle }) {
  return (
    <Grid item container sm={12}>
      {showTitle && (
        <Grid item sm={12} spacing={2}>
          <Box ml={1} mb={1}>
            <Typography variant="h4" component="h1">
              {i18n.t('developerTeam')}
            </Typography>
          </Box>
        </Grid>
      )}
      <Grid item container spacing={2} sm={12} className="no-margin">
        {developers.map((developer, index) => (
          <TeamListItem {...developer} index={index} key={developer.title} />
        ))}
      </Grid>
    </Grid>
  )
}

TeamList.propTypes = {
  showTitle: PropTypes.bool,
  developers: PropTypes.array.isRequired
}

TeamList.defaultProps = {
  showTitle: true
}

export default withTranslation()(TeamList)
