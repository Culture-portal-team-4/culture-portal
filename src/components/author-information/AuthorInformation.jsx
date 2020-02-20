import React from 'react';
import data from '../../data/data.json';
import {useParams} from "react-router-dom";
import styles from './author-ingormation-style';
import { Grid, Typography, Box } from '@material-ui/core';
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";


AuthorInformation.propTypes = {
    id: PropTypes.number
};
export default function AuthorInformation() {
    const { photographers } = data;
    const classes = styles();
    const {id} = useParams();
    return (
        <Container>
            <Grid item container direction="column" alignItems="center" sm={12}>
                    <Box mb={5} mt={5} >
                        <Avatar alt="Author Photo" src={photographers[id].img} variant="rounded" className={classes.large} />
                    </Box>
                    <Box  color="text.title" mb={2} >
                        <Typography variant="h4" component="h1">
                            {photographers[id].name}
                        </Typography>
                    </Box>

                <Box color="text.primary" mb={2} >
                    <Typography variant="h6" component="h2">
                    {photographers[id].yearsOfLife}
                    </Typography>
                </Box>
            </Grid>
        </Container>

    )
}
