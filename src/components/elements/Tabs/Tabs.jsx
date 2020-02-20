import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import styles from './style'
import {StyledTabs, StyledTab} from './customiseTabs'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
      <Typography
          component="div"
          role="tabpanel"
          hidden={value !== index}
          id={`scrollable-auto-tabpanel-${index}`}
          aria-labelledby={`scrollable-auto-tab-${index}`}
          {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

export default function ScrollableTabs(props) {
  const { titles, componentsList } = props
  const classes = styles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <StyledTabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
          >
            {titles.map((title, index) => {
              return <StyledTab key={`${index}tabTitle`} label={title} {...a11yProps(index)} />
            })}
          </StyledTabs>
        </AppBar>

        {componentsList.map((component, index) => {
          return <TabPanel key={`${index}tabComponent`}  value={value} index={index}> {component} </TabPanel>
        })}

      </div>
  );
}
