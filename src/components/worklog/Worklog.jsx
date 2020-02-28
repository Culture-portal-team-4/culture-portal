import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { Grid, Box } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import WorkLogTime from './WorkLogTime'
import WorkLogDifficulties from './WorkLogDifficulties'
import WorkLogEvaluation from './WorkLogEvaluation'
import AnimationWrapper from '../animation-wrapper/AnimationWrapper'
import worklog from '../../data/worklog.json'

const variants = {
  on: {
    opacity: 1,
    y: '0%'
  },
  off: {
    opacity: 0,
    y: '100%'
  }
}

export default function Worklog({ developers, difficulties, evaluations }) {
  return (
    <>
      <Grid item sm={12} xs={12}>
        <Box ml={1} mb={1}>
          <Typography variant="h4">Worklog</Typography>
        </Box>
      </Grid>
      <Grid item container spacing={2} className="no-margin">
        {developers.map((developer, index) => (
          <WorkLogTime
            {...developer}
            key={developer.title}
            index={index}
            variants={variants}
          />
        ))}
        <Grid item sm={12} xs={12}>
          <AnimationWrapper
            index={developers.length}
            variants={variants}
            style={{ height: '100%' }}
          >
            <Paper>
              <Box p={2}>
                <Typography variant="h5">Difficulties</Typography>
              </Box>
              <Box px={1} pb={1}>
                <WorkLogDifficulties difficulties={difficulties} />
              </Box>
            </Paper>
          </AnimationWrapper>
        </Grid>
        <Grid item sm={12} xs={12}>
          <AnimationWrapper
            index={developers.length + 1}
            variants={variants}
            style={{ height: '100%' }}
          >
            <Paper>
              <Box p={2}>
                <Typography variant="h5">Self-evaluation (270/280)</Typography>
              </Box>
              {evaluations.map((evaluation, index) => (
                <WorkLogEvaluation evaluation={evaluation} key={index} />
              ))}
            </Paper>
          </AnimationWrapper>
        </Grid>
      </Grid>
    </>
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
