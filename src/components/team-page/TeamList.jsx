import React from 'react'
import data from '../../data/data.json'
import TeamListItem from './TeamListItem'
import { Grid } from '@material-ui/core'

export default function TeamList() {
  const { developers } = data
  return (
    <Grid item container sm={12}>
      <Grid item container spacing={2} sm={12}>
        {developers.map((developer, index) => (
          <TeamListItem {...developer} index={index} key={developer.name} />
        ))}
      </Grid>
    </Grid>
  )
}
