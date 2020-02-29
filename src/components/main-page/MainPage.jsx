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
import { withTranslation } from 'react-i18next'

const mainPageData = {
  title:
    'Information on this portal is dedicated to\n"Belarusian Photographers"',
  rhyme:
    'In cold Belarus there once lived a bull \n  Who learned days and nights in Rolling scopes school \n\n React and redux, material and hooks\nOnce made him to think of photographers in Belarus\n\nThe bull used his brain and thoroughly thunk\nSo check out this site. Let’s hope it’s not junk! ',
  description:
    'So... The history of Belarusian photography begins in the middle of the XIX century. Who were the first Belarusians who were carried away by this exciting and then still very expensive occupation, and most importantly, what fell into their lens?'
}

MainPage.propTypes = {
  photographers: PropTypes.array.isRequired,
  developers: PropTypes.array.isRequired
}

function MainPage({ developers, photographers, i18n }) {
  const classes = styles()
  const rhyme = mainPageData.rhyme

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
      <Grid item sm={12}>
        <Box ml={1} mb={1}>
          <Typography variant="h4" component="h1">
            {i18n.t('mainPage')}
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
        <Grid item md={4} sm={12} xs={12}>
          <AnimationWrapper variants={variants} style={{ height: '100%' }}>
            <Paper className={classes.paper}>
              <Box>
                <Box className={classes.avatar}>
                  <Avatar alt="RS bull" src={logo} variant="rounded" />
                </Box>
                <Box p={2}>
                  <Typography
                    variant="body1"
                    component={'span'}
                    paragraph={true}
                  >
                    {rhyme.split('\n').map((i, index) => {
                      return <p key={index}>{i}</p>
                    })}
                  </Typography>
                </Box>
              </Box>
              <Button>
                <Link to={'/authors'}>{i18n.t('wantToLearnMore')}</Link>
              </Button>
            </Paper>
          </AnimationWrapper>
        </Grid>
        <Grid item md={8} sm={12} xs={12}>
          <AnimationWrapper
            variants={variants}
            delay={0.6}
            style={{ height: '100%' }}
          >
            <TabPanelDescription
              mainPageData={mainPageData}
              photographers={photographers}
              developers={developers}
            />
            />
          </AnimationWrapper>
        </Grid>
      </Grid>
    </>
  )
}

export default withTranslation()(MainPage)
