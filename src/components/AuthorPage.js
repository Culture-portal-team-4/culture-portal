import React, {Fragment} from 'react';
import AuthorInformation from "./author-information/AuthorInformation";
import PhotoGallery from "./author-information/image-gallery/ImageGallery";

const Author = () => {

  return (
      <Fragment>
        <AuthorInformation />
        <PhotoGallery/>
      </Fragment>

  );
};

export default Author;
