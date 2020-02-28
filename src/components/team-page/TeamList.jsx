import React from 'react'
import data from '../../data/data.json'
import TeamListItem from './TeamListItem'
import { Grid, Typography, Box } from '@material-ui/core'
import PropTypes from 'prop-types'

export default function TeamList({ showTitle }) {
  const { developers } = data
  return (
    <Grid item container sm={12}>
      {showTitle && (
        <Grid item sm={12} spacing={2}>
          <Box ml={1} mb={1}>
            <Typography variant="h4" component="h1">
              Development team
            </Typography>
          </Box>
        </Grid>
      )}
      <Grid item container spacing={2} sm={12} className="no-margin">
        {developers.map((developer, index) => (
          <TeamListItem {...developer} index={index} key={developer.name} />
        ))}
      </Grid>
    </Grid>
  )
}

TeamList.propTypes = {
  showTitle: PropTypes.bool
}

TeamList.defaultProps = {
  showTitle: true
}
