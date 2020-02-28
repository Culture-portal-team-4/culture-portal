import React from 'react'
import PropTypes from 'prop-types'
import styles from './header-style'
import { Typography, IconButton } from '@material-ui/core'
import { Select } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

import { LANGUAGES } from '../../locales/store'

const Header = ({ handleOpenMenu, handleLocaleChange, locale, open }) => {
  const classes = styles()

  return (
    <header className={classes.header}>
      <div className={classes.headerContainer}>
        <div className={classes.boxLeft}>
          <IconButton onClick={handleOpenMenu} style={{ color: 'white' }}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
        <div className={classes.boxCenter}>
          <Typography className={classes.logoText} variant="h4">
            {(() => {
              switch (locale) {
                case 'en':
                  return 'Photographers of Belarus'
                case 'ru':
                  return 'Фотографы Белоруссии'
                case 'by':
                  return 'фатографы БЕЛАРУСІ'
                default:
                  return 'Photographers of Belarus'
              }
            })()}
          </Typography>
        </div>
        <div className={classes.boxRight}>
          <Select id="select" value={locale} onChange={handleLocaleChange}>
            {LANGUAGES.map(locale => {
              return (
                <MenuItem key={`${locale}Key`} value={locale}>
                  {locale}
                </MenuItem>
              )
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
  open: PropTypes.bool.isRequired
}

export default Header
