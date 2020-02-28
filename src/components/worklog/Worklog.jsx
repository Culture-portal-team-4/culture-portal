import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { Grid, Box } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import WorkLogTime from './WorkLogTime'
import WorkLogDifficulties from './WorkLogDifficulties'
import WorkLogEvaluation from './WorkLogEvaluation'

export default function Worklog({ developers, difficulties, evaluations }) {
  console.log(developers, difficulties, evaluations)

  return (
    <Grid item container sm={12} xs={12} spacing={2}>
      <Grid item sm={12} xs={12}>
        <Box color="text.title">
          <Typography variant="h4">Worklog</Typography>
        </Box>
      </Grid>
      {developers.map((developer, index) => (
        <WorkLogTime {...developer} key={developer.name} index={index} />
      ))}
      {/* <Grid item sm={12} xs={12}>
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
            <Typography variant="h5">Self-evaluation (230/240)</Typography>
          </Box>
          {evaluations.map(evaluation => (
            <WorkLogEvaluation evaluation={evaluation} />
          ))}
        </Paper>
      </Grid> */}
    </Grid>
  )
}

Worklog.propTypes = {
  developers: PropTypes.array,
  difficulties: PropTypes.array,
  evaluations: PropTypes.array
}
