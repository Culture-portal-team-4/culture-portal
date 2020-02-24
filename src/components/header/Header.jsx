import React from 'react'
import PropTypes from 'prop-types'
import styles from './header-style'
import { Typography, IconButton } from '@material-ui/core'
import { Select } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { LANGUAGES } from '../../constants'

const Header = ({handleOpenMenu, handleLocaleChange, locale}) => {
  const classes = styles()

  return (
    <header className={classes.header}>
      <div className={classes.headerContainer}>
        <div className={classes.boxLeft}>
          <IconButton onClick={handleOpenMenu}>
            <MenuIcon />
          </IconButton>
        </div>
        <div className={classes.boxCenter}>
          <div className={classes.logoText}>
            <Typography variant="h4">Photographers of belarus</Typography>
          </div>
        </div>
        <div className={classes.boxRight}>
          <Select id="select" value={locale} onChange={handleLocaleChange}>
            {LANGUAGES.map(locale => {
              return <MenuItem key={`${locale}Key`} value={locale}>{locale}</MenuItem>
            })}
          </Select>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  handleOpenMenu: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
  handleLocaleChange: PropTypes.func.isRequired,
}

export default Header
