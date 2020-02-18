import React from 'react'
import { Drawer, Typography } from '@material-ui/core'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { NavLink } from 'react-router-dom'
import styles from './style'

export default function Menu({ navigations, open, onClose }) {
  const classes = styles()

  return (
    <Drawer open={open} onClose={onClose}>
      <ul className={classes.list}>
        {navigations.map(navigation => (
          <li>
            <NavLink
              exact
              to={navigation.path}
              className={classes.listItem}
              activeClassName={classes.listItemActive}
            >
              <ListItemIcon className={classes.listItemIcon}>
                {navigation.icon}
              </ListItemIcon>
              <Typography>{navigation.title}</Typography>
            </NavLink>
          </li>
        ))}
      </ul>
    </Drawer>
  )
}
