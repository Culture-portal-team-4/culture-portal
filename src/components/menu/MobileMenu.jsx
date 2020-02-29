import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'
import Menu from './Menu'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
    background: theme.palette.secondary.main
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  mobileMenu: {
    width: '100%'
  }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function MobileMenu({ open, handleOpenMenu, navigations }) {
  const classes = useStyles()

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleOpenMenu}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton color="inherit" onClick={handleOpenMenu}>
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Menu
            </Typography>
          </Toolbar>
        </AppBar>
        <Menu
          navigations={navigations}
          open={open}
          className={classes.mobileMenu}
          handleClick={handleOpenMenu}
        />
      </Dialog>
    </div>
  )
}

MobileMenu.propTypes = {
  navigations: PropTypes.array,
  open: PropTypes.bool,
  handleClick: PropTypes.func
}
