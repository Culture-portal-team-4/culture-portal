import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import styles from './style'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import { Grid, Typography } from '@material-ui/core'

const AuthorsListItem = ({ id, name, img, description }) => {
  const classes = styles()
  const history = useHistory()

  return (
    <Grid item md={3} sm={4} xs={12}>
      <Card>
        <CardMedia component="img" className={classes.media} image={img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="secondary"
            onClick={() => history.push(`/author/${id}`)}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

AuthorsListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string
}

export default React.memo(AuthorsListItem)
