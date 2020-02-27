import React from 'react'
import { Typography } from '@material-ui/core'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { NavLink } from 'react-router-dom'
import styles from './menu-style'
import AnimationWrapper from '../animation-wrapper/AnimationWrapper'

const variants = {
  on: {
    opacity: 1,
    x: '0%'
  },
  off: {
    opacity: 0,
    x: '-100%'
  }
}

export default function Menu({ navigations, open, onClose }) {
  const classes = styles()

  return (
    <ul className={classes.list}>
      {navigations.map((navigation, index) => (
        <AnimationWrapper
          delay={open ? 0.3 : 0}
          duration={open ? 0.1 : 0}
          index={index}
          key={navigation.title}
          show={open}
          variants={variants}
        >
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
        </AnimationWrapper>
      ))}
    </ul>
  )
}
