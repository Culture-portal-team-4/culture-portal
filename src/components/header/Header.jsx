import React from 'react'
import PropTypes from 'prop-types'
import styles from './header-style'
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

const Header = ({ handleOpenMenu, open }) => {
  const classes = styles()

  return (
    <header className={classes.header}>
      <div className={classes.headerContainer}>
        <div className={classes.boxLeft}>
          <IconButton onClick={handleOpenMenu}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
        <div className={classes.boxRight}>
          <div className={classes.logoText}></div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  select: PropTypes.string
}

export default Header
