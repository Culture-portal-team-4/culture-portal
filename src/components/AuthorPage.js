import React from 'react';
import PropTypes from 'prop-types'
import AuthorInformation from "./author-information/AuthorInformation";

const Author = ({ photographers }) => {
  return (
      <AuthorInformation photographers={ photographers }/>
  );
};

export default Author;

Author.propTypes = {
  photographers: PropTypes.array.isRequired,
}
