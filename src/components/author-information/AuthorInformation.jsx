import React from 'react';
import data from '../../data/data.json';
import {useParams} from "react-router-dom";
import styles from './author-information-style';
import { Grid, Typography, Box } from '@material-ui/core';
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import AuthorsTimeline from '../timeline/AuthorsTimeline';
import YandexMap from '../YandexMap/YandexMap';
import Video from '../video/Video';

AuthorInformation.propTypes = {
    id: PropTypes.number
};
AuthorInformation.defaultProps = {
    id: 0,
    photographers: data.photographers
};
export default function AuthorInformation({ author }) {
    const classes = styles();
    return (
        <Container>
            <Grid item container direction="column" alignItems="center" sm={12}>
                    <Box mb={5} mt={5} >
                        <Avatar alt="Author Photo" src={author.img} variant="rounded" className={classes.large} />
                    </Box>
                    <Box  color="text.title" mb={2} >
                        <Typography variant="h4" component="h1">
                            {author.name}
                        </Typography>
                    </Box>

                <Box color="text.primary" mb={2} >
                    <Typography variant="h6" component="h2">
                    {author.yearsOfLife}
                    </Typography>
                </Box>
                <Box mb={5} mt={5} >
                    <Video youTubeVideoUrl={author.video} id={id}/>
                </Box>
                <Box mb={5} mt={5} >
                    <AuthorsTimeline timeLineItems={author.biography} />
                </Box>
                <Box mb={5} mt={5} >
                    <YandexMap locationsCoords={author.locationsCoords} />
                </Box>
            </Grid>
        </Container>

    )
}
