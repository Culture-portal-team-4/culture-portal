import React from 'react'
import data from '../../data/data.json'
import styles from './MainPageStyles'
import { Grid, Typography, Box, Paper } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Avatar from '@material-ui/core/Avatar'
import PropTypes from 'prop-types'
import logo from './logo.png'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import TabPanelDescription from './tab-panel/TabPanelDescription'
import AnimationWrapper from '../animation-wrapper/AnimationWrapper.jsx'

MainPage.propTypes = {
  mainPageData: PropTypes.object,
  photographers: PropTypes.array
}
MainPage.defaultProps = {
  mainPageData: data.mainPage,
  photographers: data.photographers
}

export default function MainPage(props) {
  const classes = styles()
  const rhyme = props.mainPageData.rhyme

  const variants = {
    on: {
      opacity: 1,
      x: '0%'
    },
    off: {
      opacity: 0,
      x: '100%'
    }
  }

  return (
    <>
      <Grid item sm={12} spacing={2}>
        <Box ml={1} mb={1}>
          <Typography variant="h4" component="h1">
            Main page
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        container
        sm={12}
        spacing={2}
        className={`${classes.container} no-margin`}
      >
        <Grid item sm={4}>
          <AnimationWrapper variants={variants} style={{ height: '100%' }}>
            <Paper className={classes.paper}>
              <Box>
                <Box className={classes.avatar}>
                  <Avatar alt="RS bull" src={logo} variant="rounded" />
                </Box>
                <Box p={2}>
                  <Typography variant="body1" paragraph={true}>
                    {rhyme.split('\n').map((i, index) => {
                      return <p key={index}>{i}</p>
                    })}
                  </Typography>
                </Box>
              </Box>
              <Button>
                <Link to={'/authors'}>Want to know more?</Link>
              </Button>
            </Paper>
          </AnimationWrapper>
        </Grid>
        <Grid item sm={8}>
          <AnimationWrapper
            variants={variants}
            delay={0.6}
            style={{ height: '100%' }}
          >
            <TabPanelDescription
              mainPageData={props.mainPageData}
              randomAuthorData={props.photographers}
            />
          </AnimationWrapper>
        </Grid>
      </Grid>
    </>
  )
}
