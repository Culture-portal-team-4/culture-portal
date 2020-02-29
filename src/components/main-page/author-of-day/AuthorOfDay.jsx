import React from 'react'
import FaceIcon from '@material-ui/icons/Face'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import styles from './AuthorOfDayStyles'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const getRandomArbitrary = size => {
  return Math.floor(Math.random() * size)
}

AuthorOfDay.propTypes = {
  photographers: PropTypes.array.isRequired
}

export default function AuthorOfDay({ photographers }) {
  const classes = styles()
  const randomAuthorDetails =
    photographers[getRandomArbitrary(photographers.length)]
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {randomAuthorDetails.fullName[0]}
          </Avatar>
        }
        title={randomAuthorDetails.fullName}
        subheader={randomAuthorDetails.yearsOfLife}
      />
      <CardMedia className={classes.media} image={randomAuthorDetails.image} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {randomAuthorDetails.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="show more">
          <Link to={'/authors'}>
            <FaceIcon />
          </Link>
        </IconButton>
      </CardActions>
    </Card>
  )
}
