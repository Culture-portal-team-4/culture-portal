import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HeaderContainer from './header/HeaderContainer'
import AuthorList from './authors-list/AuthorsList'
import MainPage from './main-page/MainPage'
import AuthorPage from './authorPage/AuthorPage'
import withMenu from './HOC/withMenu'
import HomeIcon from '@material-ui/icons/Home'
import ListIcon from '@material-ui/icons/List'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
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

  const { data } = useSelector(state => ({
    data: state.localeReducer.data,
  }))
  const { photographers } = data

  return (
    <>
      <HeaderContainer handleOpenMenu={handleOpenMenu} />
      <main className={classes.main}>
        <Grid container spacing={2}>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/authors" component={AuthorList} />
            <Route path="/authors/:id"
                   render={(props) => <AuthorPage {...props}
                                                  photographers={photographers}/>}
            />
            <Route path="/team" component={TeamList} />
          </Switch>
        </Grid>
      </main>
    </>
  )
}

export default withMenu([
  { title: 'Main page', icon: <HomeIcon />, path: '/' },
  { title: 'List of photographers', icon: <ListIcon />, path: '/authors' },
  { title: 'Development team', icon: <ListIcon />, path: '/team' }
])(Root);

Root.propTypes = {
  handleOpenMenu: PropTypes.func.isRequired,
}

