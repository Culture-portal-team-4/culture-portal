import React, { Fragment, useState } from 'react'
import { Grid, Typography, Box } from '@material-ui/core'
import SearchField from '../elements/TextField/SearchField'
import data from '../../data/data.json'
import AuthorsListItem from './AuthorsListItem'
import { filters } from '../../utils'

export default function AuthorsList() {
  const [search, setSearch] = useState(null)
  const { photographers } = data

  return (
    <Fragment>
      <Grid item sm={12}>
        <Box mb={2} color="text.title">
          <Typography variant="h4" component="h1">
            Список фотографов
          </Typography>
        </Box>
      </Grid>
      <Grid item container justify="center" alignItems="center" sm={12}>
        <Grid item md={4} sm={6} xs={10}>
          <SearchField
            placeholder="Search photographers"
            onChange={event => {
              setSearch(event.target.value)
            }}
          />
        </Grid>
      </Grid>
      <Grid item container spacing={2} sm={12}>
        {filters(photographers, search, ['name', 'yearsOfLife']).map(
          photographer => (
            <AuthorsListItem {...photographer} key={photographer.id} />
          )
        )}
      </Grid>
    </Fragment>
  )
}
