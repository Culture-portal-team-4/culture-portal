import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import styles from './style'
import StyledTab from './StyledTab/StyledTab'
import StyledTabs from './StyledTabs/StyledTabs'
import TabPanel from './TabPanel/TabPanel'
import PropTypes from "prop-types";

export default function ScrollableTabs(props) {
  const { titles, componentsList } = props
  const classes = styles()
  const [activeTabIndex, setActiveTabIndex] = React.useState(0)

  const changeActiveTab = (event, newActiveTabIndex) => {
    setActiveTabIndex(newActiveTabIndex)
  }

  return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <StyledTabs
              value={activeTabIndex}
              onChange={changeActiveTab}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
          >
            {titles.map((title, index) => {
              return <StyledTab
                  key={`${index}${title}`}
                  label={title}
                  id = {`scrollable-auto-tab-${index}`}
                  aria-controls = {`scrollable-auto-tabpanel-${index}`}
              />
            })}
          </StyledTabs>
        </AppBar>

        {componentsList.map((component, index) => {
          return <TabPanel key={`${index}${component}`} activeTabIndex={activeTabIndex} index={index}> {component} </TabPanel>
        })}
      </div>
  );
}

ScrollableTabs.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  componentsList: PropTypes.arrayOf(PropTypes.elementType).isRequired,
};

