import React from 'react'
import PropTypes from 'prop-types'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ShareIcon from '@material-ui/icons/Share'
import style from './worklog-style'
import { Grid, Box } from '@material-ui/core'

import Paper from '@material-ui/core/Paper'
import { doSort, openUrl } from '../../utils'
import AnimationWrapper from '../animation-wrapper/AnimationWrapper'

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#00C49F',
  '#0088FE'
]

const variants = {
  on: {
    opacity: 1,
    y: '0%'
  },
  off: {
    opacity: 0,
    y: '100%'
  }
}
export default function WorkLogTime({ index, name, userPic, github, worklog }) {
  const classes = style()
  const works = worklog.sort((a, b) => doSort(a, b, 'time'))

  const renderTimeLine = () => {
    return (
      <Box display="flex">
        {works.map(({ time }, index) => {
          const fullTime = works.reduce((acc, { time }) => acc + time, 0)
          return (
            <div
              key={index}
              style={{
                width: `${(time / fullTime) * 100}%`,
                height: '8px',
                background: COLORS[index]
              }}
            ></div>
          )
        })}
      </Box>
    )
  }

  return (
    <Grid item md={4} sm={6} xs={12}>
      <AnimationWrapper index={index} variants={variants}>
        <Paper className={classes.paper}>
          <Box mb={1}>
            {renderTimeLine(name)}
            <CardHeader
              avatar={<Avatar src={userPic} />}
              title={name}
              action={
                <IconButton onClick={() => openUrl(github)}>
                  <ShareIcon />
                </IconButton>
              }
            />
            <Grid
              container
              item
              sm={12}
              className={classes.content}
              spacing={0}
            >
              <Grid item sm={12} xs={12} className={classes.headerTable}>
                <Typography variant="body1">Worklog</Typography>
                <Typography variant="body1">Time</Typography>
              </Grid>
              <Grid item sm={12} xs={12}>
                <ul>
                  {works.map(({ title, time }, index) => (
                    <li className={classes.tableRow} key={index}>
                      <Box display="flex" alignItems="center">
                        <span
                          className={classes.tableRowColor}
                          style={{
                            background: COLORS[index]
                          }}
                        ></span>
                        <Typography variant="body2">{title}</Typography>
                      </Box>
                      <Typography variant="body2">{time}</Typography>
                    </li>
                  ))}
                </ul>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </AnimationWrapper>
    </Grid>
  )
}

WorkLogTime.propTypes = {
  name: PropTypes.string,
  userPic: PropTypes.string,
  github: PropTypes.string,
  worklog: PropTypes.array
}
