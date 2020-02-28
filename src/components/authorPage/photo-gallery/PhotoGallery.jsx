import React from 'react';
import ImageGallery from 'react-image-gallery';
import './photoGalleryStyles.css';

import PropTypes from "prop-types";


PhotoGallery.propTypes = {
    author: PropTypes.object.isRequired,
};

export default function PhotoGallery(props) {

    const {author} = props;
        const getImageSet = () => author.gallery.map(({ link }) => ({ original: link, thumbnail: link }));
        return (
                <ImageGallery items={getImageSet()} />
            )
}
