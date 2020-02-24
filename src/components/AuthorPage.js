import React, {Fragment} from 'react';
import AuthorInformation from "./author-information/AuthorInformation";
import MyGallery from "./author-information/image-gallery/ImageGallery";

const Author = () => {

  return (
      <Fragment>
        <AuthorInformation />
        <MyGallery/>
      </Fragment>

  );
};

export default Author;
