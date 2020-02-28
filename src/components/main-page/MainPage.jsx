import React from 'react';
import styles from './MainPageStyles';
import { Grid, Typography, Box } from '@material-ui/core';
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import logo from "./logo.png";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import TabPanelDescription from "./tab-panel/TabPanelDescription";
import { withTranslation } from "react-i18next";

const  mainPageData = {
    "title": "Information on this portal is dedicated to\n\"Belarusian Photographers\"",
    "rhyme": "In cold Belarus there once lived a bull \n  Who learned days and nights in Rolling scopes school \n\n React and redux, material and hooks\nOnce made him to think of photographers in Belarus\n\nThe bull used his brain and thoroughly thunk\nSo check out this site. Let’s hope it’s not junk! ",
    "description": "So... The history of Belarusian photography begins in the middle of the XIX century. Who were the first Belarusians who were carried away by this exciting and then still very expensive occupation, and most importantly, what fell into their lens?"
}

MainPage.propTypes = {
   photographers:PropTypes.array.isRequired,
   developers:PropTypes.array.isRequired,
};

function MainPage({developers, photographers, i18n }) {
    const classes = styles();
    const  rhyme = mainPageData.rhyme;
    return (
        <Container>
            <Grid item container direction="column" alignItems="center" sm={12}>
                <Box mb={5} mt={5} boxShadow={3}>
                    <Avatar alt="RS bull" src={logo} variant="rounded" className={classes.large} />
                </Box>
                <Box  color="text.title" mb={2} width={2/3}>
                    <Typography variant="h5" component="h5" align = "center" paragraph={true}>
                        {rhyme.split('\n').map((i,index) => {
                        return <p key ={index}>{i}</p>
                    })}
                    </Typography>
                </Box>

                <Button>
                    <Link to={"/authors"}>{i18n.t("wantToLearnMore")}</Link>
                </Button>
                <TabPanelDescription
                    mainPageData={mainPageData}
                    photographers={photographers}
                    developers={ developers }/>
            </Grid>
        </Container>
    )
}

export default withTranslation()(MainPage);
