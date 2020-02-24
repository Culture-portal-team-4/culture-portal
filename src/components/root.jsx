import React, {Fragment, useState} from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './header/Header'
import AuthorList from '../components/AuthorsList'
import Main from '../components/Main'
import AuthorPage from '../components/AuthorPage'
import withMenu from './HOC/withMenu'
import HomeIcon from '@material-ui/icons/Home'
import ListIcon from '@material-ui/icons/List'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { changedLocale } from '../locales/store'
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

  const [locale, setLocale] = useState( 'En')
  const dispatch = useDispatch()
  const { data } = useSelector(state => ({
    data: state.localeReducer,
  }))

  const handleLocaleChange = ({ target: { value } }) => {
    setLocale(value)
    dispatch(changedLocale(value))
  }

  const { photographers } = data

  return (
    <Fragment>
      <Header handleOpenMenu={handleOpenMenu}
              locale={locale}
              handleLocaleChange={handleLocaleChange}
      />
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

