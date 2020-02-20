import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import data from '../../data/data.json'

import { Grid, Typography, Box } from '@material-ui/core'
import SearchField from '../elements/TextField/SearchField'
import AuthorsListItem from './AuthorsListItem'
import { doFilter } from '../../utils'

export default function AuthorsList({ photographers }) {
  const [search, setSearch] = useState(null)

  const filterAuthors = useMemo(
    () =>
      doFilter(photographers, search, [
        'name',
        'yearsOfLife'
      ]).map(photographer => (
        <AuthorsListItem {...photographer} key={photographer.id} />
      )),
    [photographers, search]
  )

  return (
    <>
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
        {filterAuthors}
      </Grid>
    </>
  )
}

AuthorsList.propTypes = {
  photographers: PropTypes.array
}

AuthorsList.defaultProps = {
  photographers: data.photographers
}
