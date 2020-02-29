import React from 'react'
import { Typography } from '@material-ui/core'
import styles from './LinksStyles'

export default function Links() {
  const classes = styles()

  return (
    <a href='' className={classes.link}>
        <Typography variant="button" className={classes.cardMore}>
          learn more
        </Typography>
    </a>
  )
}
