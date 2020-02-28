import React from "react";
import data from "../../data/data.json";
import styles from "./MainPageStyles";
import { Grid, Typography, Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import logo from "./logo.png";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import TabPanelDescription from "./tab-panel/TabPanelDescription";
import { withTranslation } from "react-i18next";

MainPage.propTypes = {
  mainPageData: PropTypes.object,
  photographers: PropTypes.array
};
MainPage.defaultProps = {
  mainPageData: data.mainPage,
  photographers: data.photographers
};
function MainPage(props) {
  const classes = styles();
  const rhyme = props.mainPageData.rhyme;
  const { i18n } = props;
  return (
    <Container>
      <Grid item container direction="column" alignItems="center" sm={12}>
        <Box mb={5} mt={5} boxShadow={3}>
          <Avatar
            alt="RS bull"
            src={logo}
            variant="rounded"
            className={classes.large}
          />
        </Box>
        <Box color="text.title" mb={2} width={2 / 3}>
          <Typography
            variant="h5"
            component="h5"
            align="center"
            paragraph={true}
          >
            {i18n.t("rhyme").split("\n").map((i, index) => {
              return <p key={index}>{i}</p>;
            })}
          </Typography>
        </Box>

        <Button>
          <Link to={"/authors"}>{i18n.t("wantToLearnMore")}</Link>
        </Button>
        <TabPanelDescription
          mainPageData={props.mainPageData}
          randomAuthorData={props.photographers}
        />
      </Grid>
    </Container>
  );
}

export default withTranslation()(MainPage);
