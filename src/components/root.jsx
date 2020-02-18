import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './header'
import Footer from '../components/Footer'
import AuthorList from '../components/AuthorsList'
import Main from '../components/Main'
import AuthorPage from '../components/AuthorPage'
import MenuHOC from './HOC/MenuHOC'

import HomeIcon from '@material-ui/icons/Home'
import ListIcon from '@material-ui/icons/List'

function Root({ handleOpenMenu }) {
  return (
    <Fragment>
      <Header select="select lang" handleOpenMenu={handleOpenMenu} />
      <main>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/authors" component={AuthorList} />
          <Route path="/authors/:id" component={AuthorPage} />
        </Switch>
      </main>
      <Footer />
    </Fragment>
  )
}

export default MenuHOC([
  { title: 'Главная', icon: <HomeIcon />, path: '/' },
  { title: 'Список фотографов', icon: <ListIcon />, path: '/authors' }
])(Root)
