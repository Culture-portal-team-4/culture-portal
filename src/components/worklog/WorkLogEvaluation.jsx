import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import style from './worklog-style'

export default function WorkLogEvaluation({ evaluation: { title, tasks } }) {
  const classes = style()

  return (
    <Box px={2} pb={1}>
      <Typography variant="h6">{title}</Typography>
      <ul>
        {tasks.map(({ title, complete }, index) => (
          <li key={index} className={classes.evaluationItem}>
            <Checkbox
              checked={complete}
              className={classes.evaluationCheckbox}
            />
            <Typography variant="body2">{title}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  )
}

WorkLogEvaluation.propTypes = {
  evaluation: PropTypes.shape({
    title: PropTypes.string,
    tasks: PropTypes.array
  })
}
