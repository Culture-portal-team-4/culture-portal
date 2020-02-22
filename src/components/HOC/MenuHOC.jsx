import React, { useState, Fragment } from 'react'
import Menu from '../menu'

export default navigations => {
  return Component => {
    return props => {
      const [open, setOpen] = useState(false)
      const [locale, setLocale] = useState( 'En')

      const handleOpenMenu = () => {
        setOpen(!open)
      }

      const handleSelectChange = (value) => {
        setLocale(value)
      }

      return (
        <Fragment>
          <Menu
            navigations={navigations}
            open={open}
            onClose={handleOpenMenu}
          />
          <Component
              {...props}
              locale={locale}
              handleOpenMenu={handleOpenMenu}
              handleSelectChange={handleSelectChange}/>
        </Fragment>
      )
    }
  }
}
