import React, {Fragment} from 'react';
import ImageGallery from 'react-image-gallery';
import data from '../../../data/data.json';
import './image-gallery.css';
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";
import {useParams} from "react-router-dom";
import PropTypes from "prop-types";
const imageSet = (id=0)=>{
    let images= data.photographers[id].gallery.map((work)=>{
        let imageObject = {};
        imageObject.original = work.link;
        imageObject.thumbnail = work.link;
        return imageObject
    });
   return images;

};

PhotoGallery.propTypes = {
    id: PropTypes.number
};
PhotoGallery.defaultProps = {
    id: 0,

};
export default function PhotoGallery(props) {
    const {id} = useParams();
        return (
                <Fragment>
                    <Grid item container direction="column" alignItems="center" sm={12}>
                        <Typography variant="h4" component="h1">
                            {'Gallery of works'}
                        </Typography>
                    <ImageGallery items={imageSet(id)} description = {'Lolita'}/>
                    </Grid>
                </Fragment>
            )



}
