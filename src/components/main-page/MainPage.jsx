import React from 'react';
import data from '../../data/data.json';
import styles from './MainPageStyles';
import { Grid, Typography, Box } from '@material-ui/core';
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import logo from "./logo.png";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import TabPanelDescription from "./tab-panel/TabPanelDescription";

MainPage.propTypes = {
    mainPageData: PropTypes.object
};
MainPage.defaultProps = {
    mainPageData: data.mainPage,
};
export default function MainPage(props) {
    const classes = styles();

    const  rhyme = props.mainPageData.rhyme;
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

                <Button>
                   <Link to={"/authors"}>
                       Want to know more?
                   </Link>
                </Button>
                <TabPanelDescription/>
            </Grid>
        </Container>

    )
}
