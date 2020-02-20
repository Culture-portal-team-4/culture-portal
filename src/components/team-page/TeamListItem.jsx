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

export default function TeamListItem({ name, userPic, github }) {
  const openUrl = url => {
    window.open(url, '_blank')
  }

  return (
    <Grid item md={3} sm={6} xs={12}>
      <Card>
        <CardHeader
          avatar={<Avatar src={userPic} />}
          title={name}
          action={
            <IconButton onClick={() => openUrl(github)}>
              <ShareIcon />
            </IconButton>
          }
        />
        <CardMedia
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

TeamListItem.propTypes = {
  name: PropTypes.string,
  userPic: PropTypes.string,
  github: PropTypes.string
}