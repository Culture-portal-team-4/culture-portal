import React, {Fragment} from 'react';
import ImageGallery from 'react-image-gallery';
import data from '../../../data/data.json';
import './image-gallery.css';
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";
import {useParams} from "react-router-dom";
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
    const {id} = useParams();
    const {photographers} = props;
        const getImageSet = () => photographers[id].gallery.map(({ link }) => ({ original: link, thumbnail: link }));
        return (
                <Fragment>
                    <Grid item container direction="column" alignItems="center" sm={12}>
                        <Typography variant="h4" component="h1">
                            {'Gallery of works'}
                        </Typography>
                    <ImageGallery items={getImageSet()} />
                    </Grid>
                </Fragment>
            )
}
