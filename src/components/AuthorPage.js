import React from 'react';
import AuthorInformation from "./author-information/AuthorInformation";
import PhotoGallery from "./author-information/image-gallery/PhotoGallery";

const Author = () => {

  return (
      <>
        <AuthorInformation />
        <PhotoGallery/>
      </>

  );
};

export default Author;
