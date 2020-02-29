import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import style from './worklog-style'

export default function WorkLogDifficulties({ difficulties }) {
  const classes = style()

  return (
    <ul>
      {difficulties.map((difficult, index) => (
        <li className={classes.difficultRow} key={index}>
          <CloseIcon className={classes.difficultIcon} />
          <Typography variant="body2" color="textSecondary" component="p">
            {difficult}
          </Typography>
        </li>
      ))}
    </ul>
  )
}

WorkLogDifficulties.propTypes = {
  difficulties: PropTypes.array
}
