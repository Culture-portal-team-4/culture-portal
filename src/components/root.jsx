import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AuthorList from '../components/AuthorsList'
import Main from '../components/Main'
import AuthorPage from '../components/AuthorPage'

export default function Root() {
  return (
    <Fragment>
      <Header select="select lang" />
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
