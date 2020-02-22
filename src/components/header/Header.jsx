import React from 'react'
import PropTypes from 'prop-types'
import styles from './header-style'
import { Typography, IconButton } from '@material-ui/core'
import { Select } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const Header = ({handleOpenMenu, changeLocale, handleSelectChange, locale}) => {
  const classes = styles()

  const handleLocaleChange = ({ target: { value } }) => {
    changeLocale(value)
    handleSelectChange(value)
  }

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
            <MenuItem key='ruKey' value="Ru">Ru</MenuItem>
            <MenuItem key='enKey' value="En">En</MenuItem>
          </Select>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  handleOpenMenu: PropTypes.func.isRequired,
  changeLocale: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
}

export default Header
