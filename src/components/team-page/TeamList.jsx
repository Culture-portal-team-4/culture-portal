import React from 'react'
import data from '../../data/data.json'
import TeamListItem from './TeamListItem'
import { Grid, Typography, Box } from '@material-ui/core'

export default function TeamList() {
  const { developers } = data
  return (
    <Grid item container sm={12}>
      <Grid item sm={12}>
        <Box mb={2} color="text.title">
          <Typography variant="h4" component="h1">
            Команда разработчиков
          </Typography>
        </Box>
      </Grid>
      <Grid item container spacing={2} sm={12}>
        {developers.map((developer, index) => (
          <TeamListItem {...developer} index={index} key={developer.name} />
        ))}
      </Grid>
    </Grid>
  )
}
