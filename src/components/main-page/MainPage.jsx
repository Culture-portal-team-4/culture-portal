import React from 'react';
import data from '../../data/data.json';
//import {useParams} from "react-router-dom";
import styles from './MainPageStyles';
import { Grid, Typography, Box } from '@material-ui/core';
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import logo from "./logo.png"
import { shadows } from '@material-ui/system';
import Button from "@material-ui/core/Button";

MainPage.propTypes = {
    mainPageData: PropTypes.object
};
MainPage.defaultProps = {

    mainPageData: data.mainPage,

};
export default function MainPage(props) {
    const classes = styles();
    //const {id} = useParams();
    const  rhyme = props.mainPageData.rhyme;
    const  description = props.mainPageData.description;
    const  title = props.mainPageData.title;
    return (
        <Container>
            <Grid item container direction="column" alignItems="center" sm={12}>
                <Box mb={5} mt={5} boxShadow={3}>
                    <Avatar alt="RS bull" src={logo} variant="rounded" className={classes.large} />

                </Box>
                <Box  color="text.title" mb={2} width={1/2}>
                    <Typography variant="h5" component="h1" align = "center" paragraph={true}>
                        {rhyme.split('\n').map(i => {
                        return <p>{i}</p>
                    })}

                    </Typography>
                </Box>
                <Box color="text.primary" mb={2} >
                    <Typography variant="h6" component="h2">
                        {description}
                    </Typography>
                </Box>
                <Button>
                    "Want to learn more?"
                </Button>
            </Grid>
        </Container>

    )
}
