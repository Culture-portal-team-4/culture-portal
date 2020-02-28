import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import SearchField from '../elements/TextField/SearchField'
import AuthorsListItem from './AuthorsListItem'
import { doFilter } from '../../utils'
import { withTranslation } from "react-i18next"

function AuthorsList({ photographers, i18n }) {
  const [search, setSearch] = useState(null);

  const filterAuthors = useMemo(
    () =>
      doFilter(photographers, search, [
        "fullName",
        "yearsOfLife",
        "placeOfLiving"
      ]).map(photographer => (
        <AuthorsListItem {...photographer} key={photographer.id} />
      )),
    [photographers, search]
  );

  return (
    <>
      <Grid item container justify="space-between" alignItems="center" sm={12}>
        <Typography variant="h4" component="h1">
          {i18n.t("photographersList")}
        </Typography>
        <Grid item md={3} sm={3} xs={3}>
          <SearchField
            placeholder={i18n.t("search")}
            onChange={event => {
              setSearch(event.target.value);
            }}
          />
        </Grid>
      </Grid>
      <Grid item container spacing={2} sm={12}>
        {filterAuthors}
      </Grid>
    </>
  );
}

AuthorsList.propTypes = {
  photographers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      img: PropTypes.string,
      description: PropTypes.string
    })
  )
};

export default withTranslation()(AuthorsList);
