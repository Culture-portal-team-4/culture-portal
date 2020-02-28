import React from 'react'
import TeamListItem from './TeamListItem'
import { Grid, Typography, Box } from '@material-ui/core'
import PropTypes from "prop-types"
import { withTranslation } from "react-i18next"

function TeamList( { developers, i18n } ) {
  return (
    <Grid item container sm={12}>
      <Grid item sm={12}>
        <Box mb={2} color="text.title">
          <Typography variant="h4" component="h1">
            {i18n.t("developerTeam")}
          </Typography>
        </Box>
      </Grid>
      <Grid item container spacing={2} sm={12}>
        {developers.map((developer, index) => (
          <TeamListItem {...developer} index={index} key={developer.title} />
        ))}
      </Grid>
    </Grid>
  )
}

TeamList.propTypes = {
    developers: PropTypes.array.isRequired,
}

export default withTranslation()(TeamList);


