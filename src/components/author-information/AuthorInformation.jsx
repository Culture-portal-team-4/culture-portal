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
AuthorInformation.defaultProps = {
    id: 0,
    photographers: data.photographers
};
export default function AuthorInformation(props) {
    const classes = styles();
    const {id} = useParams();
    const  author = props.photographers[id];
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
            </Grid>
        </Container>

    )
}
