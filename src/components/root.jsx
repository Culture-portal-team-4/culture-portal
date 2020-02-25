import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './header/Header'
import AuthorList from '../components/authors-list/AuthorsList'
import Main from '../components/Main'
import AuthorPage from '../components/AuthorPage'
import MenuHOC from './HOC/withMenu'

import HomeIcon from '@material-ui/icons/Home'
import ListIcon from '@material-ui/icons/List'
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

  return (
    <main className={classes.main}>
      <AnimationWrapper show={open} variants={variants} delay={0}>
        <Menu navigations={navigations} open={open} />
      </AnimationWrapper>
      <Box width="100%" height="100%">
        <Header
          select="select lang"
          handleOpenMenu={handleOpenMenu}
          open={open}
        />
        <Grid container spacing={2} className={classes.container}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/authors" component={AuthorList} />
            <Route path="/authors/:id" component={AuthorPage} />
            <Route path="/team" component={TeamList} />
          </Switch>
        </Grid>
      </Box>
    </main>
  )
}

export default MenuHOC([
  { title: 'Главная', icon: <HomeIcon />, path: '/' },
  { title: 'Список фотографов', icon: <ListIcon />, path: '/authors' },
  { title: 'Команда разработчиков', icon: <ListIcon />, path: '/team' }
])(Root)
