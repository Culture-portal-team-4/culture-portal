
import React, {Fragment} from 'react';
import ImageGallery from 'react-image-gallery';
import data from '../../../data/data.json';
import './image-gallery.css';
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
const imageSet = (id=0)=>{
    let images= data.photographers[id].gallery.map((work)=>{
        let imageObject = new Object ()
        imageObject.original = work.link;
        imageObject.thumbnail = work.link;
        return imageObject
    });
   return images;

}

export default class MyGallery extends React.Component {
    render() {
        return (
                <Fragment>
                    <Box  color="text.title" mb={2} >
                        <Typography variant="h4" component="h1">
                            {'Gallery of works'}
                        </Typography>
                    <ImageGallery items={imageSet(0)} />
                    </Box>
                </Fragment>
            )


    }
}
