import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import PropTypes from 'prop-types'

export default function TabPanel(props) {
  const { children, activeTabIndex, index, ...other } = props
  const isHidden = activeTabIndex !== index

  return (
      <Typography
          component="div"
          role="tabpanel"
          hidden={isHidden}
          id={`scrollable-auto-tabpanel-${index}`}
          aria-labelledby={`scrollable-auto-tab-${index}`}
          {...other}
      >
        {!isHidden && <Box p={3}>{children}</Box>}
      </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.elementType).isRequired,
  activeTabIndex: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};


