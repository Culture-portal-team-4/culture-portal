import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import styles from './style'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
import { Grid, Typography } from '@material-ui/core'
import AnimationWrapper from '../animation-wrapper/AnimationWrapper'
import { withTranslation } from "react-i18next"

const AuthorsListItem = ({
  id,
  fullName,
  image,
  description,
  placeOfLiving,
  i18n
}) => {
  const classes = styles()
  const history = useHistory()

  return (
    <Grid item md={3} sm={4} xs={12}>
      <AnimationWrapper delay={0.1} className={classes.root}>
        <Card style={{ height: '100%' }}>
          <CardActionArea
            onClick={() => history.push(`/authors/${id}`)}
            className={classes.card}
          >
            <CardMedia
              component="img"
              className={classes.media}
              image={image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {fullName}
              </Typography>
              <Typography
                variant="inherit"
                component="h5"
                gutterBottom={true}
                paragraph={true}
              >
                {placeOfLiving}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
            <CardActions>
              <Typography variant="button" className={classes.cardMore}>
                {i18n.t("learnMore")}
              </Typography>
            </CardActions>
          </CardActionArea>
        </Card>
      </AnimationWrapper>
    </Grid>
  )
}

AuthorsListItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string
}

export default React.memo(withTranslation()(AuthorsListItem));
