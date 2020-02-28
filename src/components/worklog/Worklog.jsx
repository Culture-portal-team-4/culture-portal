import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { Grid, Box } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import WorkLogTime from './WorkLogTime'
import WorkLogDifficulties from './WorkLogDifficulties'
import WorkLogEvaluation from './WorkLogEvaluation'
import { withTranslation } from 'react-i18next';

import worklog from '../../data/worklog.json'

function Worklog({ developers, difficulties, evaluations, i18n }) {
  return (
    <Grid item container sm={12} xs={12} spacing={2}>
      <Grid item sm={12} xs={12}>
        <Typography variant="h4">{i18n.t("worklog")}</Typography>
      </Grid>
      {developers.map((developer, index) => (
        <WorkLogTime {...developer} key={developer.title} index={index} />
      ))}
      <Grid item sm={12} xs={12}>
        <Paper>
          <Box p={2}>
            <Typography variant="h5">{i18n.t("difficulties")}</Typography>
          </Box>
          <Box px={1} pb={1}>
            <WorkLogDifficulties difficulties={difficulties} />
          </Box>
        </Paper>
      </Grid>
      <Grid item sm={12} xs={12}>
        <Paper>
          <Box p={2}>
            <Typography variant="h5">{i18n.t("selfEvaluation")}</Typography>
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

export default withTranslation()(Worklog);
