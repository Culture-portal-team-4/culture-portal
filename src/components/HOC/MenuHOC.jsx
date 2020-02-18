import React, { useState, Fragment } from 'react'
import Menu from '../menu'

export default navigations => {
  return Component => {
    return props => {
      const [open, setOpen] = useState(false)

      const handleOpenMenu = () => {
        setOpen(!open)
      }

      return (
        <Fragment>
          <Menu
            navigations={navigations}
            open={open}
            onClose={handleOpenMenu}
          />
          <Component {...props} handleOpenMenu={handleOpenMenu} />
        </Fragment>
      )
    }
  }
}
