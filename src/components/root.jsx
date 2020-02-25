import React, {Fragment} from 'react'
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
    <Fragment>
      <HeaderContainer handleOpenMenu={handleOpenMenu} />
      <main className={classes.main}>
        <Grid container spacing={2}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/authors" component={AuthorList} />
            <Route path="/authors/:id"
                   render={(props) => <AuthorPage {...props}
                                                  photographers={photographers}/>}
            />
            <Route path="/team" component={TeamList} />
          </Switch>
        </Grid>
      </main>
    </Fragment>
  )
}

export default withMenu([
  { title: 'Главная', icon: <HomeIcon />, path: '/' },
  { title: 'Список фотографов', icon: <ListIcon />, path: '/authors' },
  { title: 'Команда разработчиков', icon: <ListIcon />, path: '/team' }
])(Root);

Root.propTypes = {
  handleOpenMenu: PropTypes.func.isRequired,
}

