import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AuthorList from './components/AuthorsList'
import Main from './components/Main'
import AuthorPage from './components/AuthorPage'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './config/material.theme'

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/authors" component={AuthorList} />
          <Route path="/authors/:id" component={AuthorPage} />
        </Switch>
      </App>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
