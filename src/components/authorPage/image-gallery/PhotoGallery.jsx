import React from 'react';
import ImageGallery from 'react-image-gallery';
import data from '../../../data/data.json';
import './image-gallery.css';

import PropTypes from "prop-types";


PhotoGallery.propTypes = {
    id: PropTypes.number,
    photographers: PropTypes.array
};
PhotoGallery.defaultProps = {
    id: 0,
    photographers: data.photographers
};
export default function PhotoGallery(props) {

    const {author} = props;
        const getImageSet = () => author.gallery.map(({ link }) => ({ original: link, thumbnail: link }));
        return (
                <ImageGallery items={getImageSet()} />
            )
}
