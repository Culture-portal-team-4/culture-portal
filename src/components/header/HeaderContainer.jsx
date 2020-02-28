import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { changedLocale } from '../../locales/store'
import Header from './Header'
import i18n from "../../i18n"

const HeaderContainer = ({ handleOpenMenu, open }) => {
  const dispatch = useDispatch()
  const { locale } = useSelector(state => ({
    locale: state.localeReducer.locale
  }))

  const handleLocaleChange = ({ target: { value } }) => {
    dispatch(changedLocale(value))
    i18n.changeLanguage(value);
  }

  return (
    <Header
      handleOpenMenu={handleOpenMenu}
      open={open}
      locale={locale}
      handleLocaleChange={handleLocaleChange}
    />
  )
}

HeaderContainer.propTypes = {
  handleOpenMenu: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}

export default HeaderContainer
