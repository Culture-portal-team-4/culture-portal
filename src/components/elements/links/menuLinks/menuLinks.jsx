import React from 'react'
import { Typography } from '@material-ui/core'
import styles from './menuLinksStyles'

export default function MenuLinks({navigations}) {
  const classes = styles()

  return (
      <ul className={classes.list}>
        {navigations.map((navigation, index) => (
              <li className={classes.listItem} key={`${index}-menuList-item`}>
                  <Typography>{navigation.title}</Typography>
              </li>
        ))}
      </ul>
  )
}
