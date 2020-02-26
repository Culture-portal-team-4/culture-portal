import React from 'react';
import PropTypes from 'prop-types'
import AuthorInformation from "./author-information/AuthorInformation";
import PhotoGallery from "./author-information/image-gallery/PhotoGallery";

const Author = ({ photographers }) => {
  return (
      <>
        <AuthorInformation photographers={ photographers }/>
        <PhotoGallery/>
      </>
  );
};

export default Author;

Author.propTypes = {
  photographers: PropTypes.array.isRequired,
}
