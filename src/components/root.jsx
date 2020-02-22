import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './header/Header'
// import Footer from '../components/Footer'
import AuthorList from '../components/AuthorsList'
import Main from '../components/Main'
import AuthorPage from '../components/AuthorPage'
import MenuHOC from './HOC/MenuHOC'
import HomeIcon from '@material-ui/icons/Home'
import ListIcon from '@material-ui/icons/List'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { changeLocale } from '../actions/actionCreator'
import TeamList from './team-page/TeamList'
import { Grid } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const style = makeStyles(theme => ({
  main: {
    padding: theme.spacing(2)
  }
}))

function Root({ handleOpenMenu, handleSelectChange, setLocaleAction, data, locale}) {
  const classes = style()
  const { photographers } = data

  return (
    <Fragment>
      <Header handleOpenMenu={handleOpenMenu}
              changeLocale={setLocaleAction}
              locale={locale}
              handleSelectChange={handleSelectChange}
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
      {/* <Footer /> */}
    </Fragment>
  )
}

const menu = MenuHOC([
  { title: 'Главная', icon: <HomeIcon />, path: '/' },
  { title: 'Список фотографов', icon: <ListIcon />, path: '/authors' },
  { title: 'Команда разработчиков', icon: <ListIcon />, path: '/team' }
])(Root);

Root.propTypes = {
  handleOpenMenu: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  setLocaleAction: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired,
}

const mapStateToProps = store => {
  return {
    data: store.localeReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLocaleAction: locale => dispatch(changeLocale(locale)),
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(menu)
