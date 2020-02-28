import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { Grid, Box } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import WorkLogTime from './WorkLogTime'
import WorkLogDifficulties from './WorkLogDifficulties'
import WorkLogEvaluation from './WorkLogEvaluation'

import worklog from '../../data/worklog.json'

export default function Worklog({ developers, difficulties, evaluations }) {
  return (
    <Grid item container sm={12} xs={12} spacing={2}>
      <Grid item sm={12} xs={12}>
        <Typography variant="h4">Worklog</Typography>
      </Grid>
      {developers.map((developer, index) => (
        <WorkLogTime {...developer} key={developer.title} index={index} />
      ))}
      <Grid item sm={12} xs={12}>
        <Paper>
          <Box p={2}>
            <Typography variant="h5">Difficulties</Typography>
          </Box>
          <Box px={1} pb={1}>
            <WorkLogDifficulties difficulties={difficulties} />
          </Box>
        </Paper>
      </Grid>
      <Grid item sm={12} xs={12}>
        <Paper>
          <Box p={2}>
            <Typography variant="h5">Self-evaluation (270/280)</Typography>
          </Box>
          {evaluations.map((evaluation, index) => (
            <WorkLogEvaluation evaluation={evaluation} key={index} />
          ))}
        </Paper>
      </Grid>
    </Grid>
  )
}

Worklog.propTypes = {
  developers: PropTypes.array,
  difficulties: PropTypes.array,
  evaluations: PropTypes.array
}

Worklog.defaultProps = {
  difficulties: worklog.difficulties,
  evaluations: worklog.evaluations
}
