import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthorList from './components/AuthorsList';
import Main from './components/Main';
import AuthorPage from './components/AuthorPage';

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/authors' component={AuthorList} />
        <Route path='/authors/:id' component={AuthorPage} />
      </Switch>
    </App>
  </BrowserRouter>
  ), document.getElementById('root')
)
