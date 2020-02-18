import React, { useState } from 'react'

export default navigations => {
  return Component => {
    return props => {
      const [open, setOpen] = useState(false)

      const handleOpenMenu = () => {
        setOpen(!open)
      }

      return <Component {...props} handleOpenMenu={handleOpenMenu} />
    }
  }
}
