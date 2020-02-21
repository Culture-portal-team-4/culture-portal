

import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import data from "../../../data/data";

function TabPanelDescription(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
    mainPageData: PropTypes.object
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


TabPanel.defaultProps = {

    mainPageData: data.mainPage,

};

export default function TabPanel(props) {

    const [value, setValue] = React.useState(0);
    const  description = props.mainPageData.description;
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div >
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Intro" {...a11yProps(0)} />
                    <Tab label="Author of the day" {...a11yProps(1)} />
                    <Tab label="Developer team" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanelDescription value={value} index={0}>
                {description}
            </TabPanelDescription>
            <TabPanelDescription value={value} index={1}>
                Item Two
            </TabPanelDescription>
            <TabPanelDescription value={value} index={2}>
                Item Three
            </TabPanelDescription>
        </div>
    );
}
