import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HeaderContainer from './header/HeaderContainer'
import AuthorList from '../components/authors-list/AuthorsList'
import Main from '../components/Main'
import AuthorPage from '../components/AuthorPage'
import withMenu from './HOC/withMenu'
import HomeIcon from '@material-ui/icons/Home'
import ListIcon from '@material-ui/icons/List'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import TeamList from './team-page/TeamList'
import { Grid, Box } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import Menu from './menu/Menu'
import AnimationWrapper from './animation-wrapper/AnimationWrapper'

const style = makeStyles(theme => ({
  main: {
    display: 'flex',
    height: '100%'
  },
  container: {
    padding: theme.spacing(2),
    alignItems: 'flex-start'
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

  const { data } = useSelector(state => ({
    data: state.localeReducer.data
  }))
  const { photographers } = data

  return (
    <main className={classes.main}>
      <AnimationWrapper show={open} variants={variants} delay={0}>
        <Menu navigations={navigations} open={open} />
      </AnimationWrapper>
      <Box width="100%" height="100%">
        <HeaderContainer handleOpenMenu={handleOpenMenu} open={open} />
        <Grid container spacing={2} className={classes.container}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/authors" component={AuthorList} />
            <Route
              path="/authors/:id"
              render={props => (
                <AuthorPage {...props} photographers={photographers} />
              )}
            />
            <Route path="/team" component={TeamList} />
          </Switch>
        </Grid>
      </Box>
    </main>
  )
}

export default withMenu([
  { title: 'Главная', icon: <HomeIcon />, path: '/' },
  { title: 'Список фотографов', icon: <ListIcon />, path: '/authors' },
  { title: 'Команда разработчиков', icon: <ListIcon />, path: '/team' }
])(Root)

Root.propTypes = {
  handleOpenMenu: PropTypes.func.isRequired
}
