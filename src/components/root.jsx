import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './header'
import Footer from '../components/Footer'
import AuthorList from '../components/authors-list/AuthorsList'
import Main from '../components/Main'
import AuthorPage from '../components/AuthorPage'
import MenuHOC from './HOC/MenuHOC'

import HomeIcon from '@material-ui/icons/Home'
import ListIcon from '@material-ui/icons/List'
import TeamList from './team-page/TeamList'
import { Grid } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const style = makeStyles(theme => ({
  main: {
    padding: theme.spacing(2)
  }
}))

function Root({ handleOpenMenu }) {
  const classes = style()

  return (
    <Fragment>
      <Header select="select lang" handleOpenMenu={handleOpenMenu} />
      <main className={classes.main}>
        <Grid container spacing={2}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/authors" component={AuthorList} />
            <Route path="/authors/:id" component={AuthorPage} />
            <Route path="/team" component={TeamList} />
          </Switch>
        </Grid>
      </main>
      {/* <Footer /> */}
    </Fragment>
  )
}

export default MenuHOC([
  { title: 'Главная', icon: <HomeIcon />, path: '/' },
  { title: 'Список фотографов', icon: <ListIcon />, path: '/authors' },
  { title: 'Команда разработчиков', icon: <ListIcon />, path: '/team' }
])(Root)
