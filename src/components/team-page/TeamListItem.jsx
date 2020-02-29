import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ShareIcon from '@material-ui/icons/Share'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import AnimationWrapper from '../animation-wrapper/AnimationWrapper'
import { openUrl } from '../../utils'
import styles from './teamListItemStyle'

export default function TeamListItem({
  index,
  fullName,
  image,
  github,
  tasks,
  title
}) {
  const classes = styles()

  return (
    <Grid item md={4} sm={6} xs={12}>
      <AnimationWrapper index={index} className={classes.root}>
        <Card className={classes.root}>
          <CardHeader
            avatar={<Avatar src={image} />}
            title={fullName}
            action={
              <IconButton onClick={() => openUrl(github)}>
                <ShareIcon />
              </IconButton>
            }
          />
          <CardContent>
            <ul>
              {tasks.map((task, indexTask) => {
                return (
                  <li
                    className={classes.list}
                    key={`${indexTask}-${title}-${index}`}
                  >
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      component="p"
                    >
                      <span className={classes.hours}>
                        {' '}
                        {`${task.spentTime}, `}{' '}
                      </span>
                      {`${task.task}`}
                    </Typography>
                  </li>
                )
              })}
            </ul>
          </CardContent>
        </Card>
      </AnimationWrapper>
    </Grid>
  )
}

TeamListItem.propTypes = {
  index: PropTypes.number.isRequired,
  fullName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}
