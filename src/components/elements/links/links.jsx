import React from 'react'
import { Typography } from '@material-ui/core'
import styles from './LinksStyles'

export default function Links({navigations}) {
  const classes = styles()

  return (
    <a href=''>
        <Typography variant="button" className={classes.cardMore}>
          "learnMore"
        </Typography>
    </a>
  )
}
