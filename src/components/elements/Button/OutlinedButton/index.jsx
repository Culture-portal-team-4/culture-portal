import React from 'react'
import { Button } from '@material-ui/core'
import styles from './style'

export default function OutlineButton(props) {
  const { title, ...other } = props
  const classes = styles()

  return (
    <Button className={classes.button} variant="outlined" {...other}>
      {title}
    </Button>
  )
}
