import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const data = [
  {
    name: 'Alex',
    id: 0,
  },
  {
    name: 'Vlad',
    id: 1,
  },
  {
    name: 'Lev',
    id: 2,
  }
]

const AuthorList = () => {
  return (
      <Fragment>
        <p>Author list + search</p>
        <ul>
          {data.map(({ id, name }) =>
              <li key={id}><Link to={`/authors/${id}`}>{name}</Link></li>
          )}
        </ul>
      </Fragment>
  );
};

export default AuthorList;
