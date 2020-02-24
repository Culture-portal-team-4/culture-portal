import React from 'react'
import PropTypes from 'prop-types'
import styles from './style'
import { Typography, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const Header = ({ handleOpenMenu }) => {
  const classes = styles()

  return (
    <header className={classes.header}>
      <div className={classes.headerContainer}>
        <div className={classes.boxLeft}>
          <IconButton onClick={handleOpenMenu}>
            <MenuIcon />
          </IconButton>
        </div>
        <div className={classes.boxRight}>
          <div className={classes.logoText}>
            <Typography variant="h4">Photographers of belarus</Typography>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  select: PropTypes.string
}

export default Header