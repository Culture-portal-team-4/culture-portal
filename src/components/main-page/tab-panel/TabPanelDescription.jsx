import React from 'react';
import PropTypes from 'prop-types';
import tabPanelStyles from "./TabPanelStyles";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import data from "../../../data/data";
import AuthorOfDay from "../author-of-day/AuthorOfDay";
import TeamList from "../../team-page/TeamList";
import TabPanel  from "../../elements/ScrollableTabs/TabPanel/TabPanel";

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

TabPanelDescription.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any,
    value: PropTypes.any,
    mainPageData: PropTypes.object
};
TabPanelDescription.defaultProps = {
    mainPageData: data.mainPage,
};

export default function TabPanelDescription(props) {
    const classes = tabPanelStyles();
    const [value, setValue] = React.useState(0);
    const  description = props.mainPageData.description;
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root} >
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Intro" {...a11yProps(0)} />
                    <Tab label="Author of the day" {...a11yProps(1)} />
                    <Tab label="Developer team" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel activeTabIndex={value} index={0}>
                {description}
            </TabPanel>
            <TabPanel activeTabIndex={value} index={1}>
                <AuthorOfDay/>
            </TabPanel>
            <TabPanel activeTabIndex={value} index={2}>
                <TeamList/>
            </TabPanel>
        </div>
    );
}
