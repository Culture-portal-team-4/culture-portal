import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HeaderContainer from './header/HeaderContainer'
import AuthorList from './authors-list/AuthorsList'
import MainPage from './main-page/MainPage'
import AuthorPage from './authorPage/AuthorPage'
import withMenu from './HOC/withMenu'
import HomeIcon from '@material-ui/icons/Home'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import AssignmentIcon from '@material-ui/icons/Assignment'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import TeamList from './team-page/TeamList'
import { Grid, Box } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import Worklog from './worklog/WorkLog'
import Menu from './menu/Menu'
import AnimationWrapper from './animation-wrapper/AnimationWrapper'
import FullScreenDialog from './menu/MobileMenu'
import { useMediaQuery } from 'react-responsive'

const style = makeStyles(theme => ({
  main: {
    display: 'flex',
    height: '100%'
  },
  container: {
    padding: theme.spacing(4, 2, 2, 2),
    alignItems: 'flex-start',
    height: 'calc(100% - 80px)'
  }
}))

const variants = {
  on: {
    opacity: 1,
    x: '0%',
    marginLeft: '0px'
  },
  off: {
    opacity: 0,
    x: '-100%',
    marginLeft: '-300px'
  }
}
function Root({ handleOpenMenu, navigations, open }) {
  const classes = style()
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const { data } = useSelector(state => ({
    data: state.localeReducer.data
  }))
  const { photographers, developers } = data

  return (
    <main className={classes.main}>
      {isTabletOrMobile ? (
        <FullScreenDialog
          navigations={navigations}
          open={open}
          handleOpenMenu={handleOpenMenu}
        />
      ) : (
        <AnimationWrapper show={open} variants={variants} delay={0}>
          <Menu navigations={navigations} open={open} />
        </AnimationWrapper>
      )}

      <Box width="100%" height="100%">
        <HeaderContainer handleOpenMenu={handleOpenMenu} open={open} />
        <Grid container className={classes.container}>
          <Switch>
            <Route
              exact
              path="/"
              render={props => <MainPage photographers={photographers} />}
            />
            <Route
              exact
              path="/authors"
              render={() => <AuthorList photographers={photographers} />}
            />
            <Route
              path="/authors/:id"
              render={props => (
                <AuthorPage {...props} photographers={photographers} />
              )}
            />
            <Route path="/team" component={TeamList} />
            <Route
              path="/worklog"
              render={props => <Worklog {...props} developers={developers} />}
            />
          </Switch>
        </Grid>
      </Box>
    </main>
  )
}

export default withMenu([
  { title: 'Main page', icon: <HomeIcon />, path: '/', exact: true },
  {
    title: 'List of photographers',
    icon: <PhotoCameraIcon />,
    path: '/authors',
    exact: false
  },
  {
    title: 'Development team',
    icon: <AssignmentIndIcon />,
    path: '/team',
    exact: true
  },
  { title: 'Worklog', icon: <AssignmentIcon />, path: '/worklog', exact: true }
])(Root)

Root.propTypes = {
  handleOpenMenu: PropTypes.func.isRequired
}
