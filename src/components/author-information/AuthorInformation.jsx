import React from 'react';
import data from '../../data/data.json';
import {useParams} from "react-router-dom";
import styles from './author-ingormation-style';
import { Grid, Typography, Box } from '@material-ui/core';
import Container from "@material-ui/core/Container";


export default function AuthorInformation() {
    const { photographers } = data;
    const classes = styles();
    //const id = useParams();
    return (
        <Container>
            <Grid item container direction="column" alignItems="center" sm={12}>
                    <Box mb={5} mt={5} >
                        <img alt="Author Photo" src={photographers[0].img} className={classes.photo} />
                    </Box>
                    <Box  color="text.title" mb={2} >
                        <Typography variant="h4" component="h1">
                            {photographers[0].name}
                        </Typography>
                    </Box>

                <Box color="text.primary" mb={2} >
                    <Typography variant="h6" component="h2">
                    {photographers[0].yearsOfLife}
                    </Typography>
                </Box>
            </Grid>
        </Container>

    )
}
