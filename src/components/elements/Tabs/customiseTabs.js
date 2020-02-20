import { withStyles } from "@material-ui/core/styles"
import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const StyledTabs = withStyles(theme => ({
  root: {
    borderBottom: "1px solid #e8e8e8"
  },
  indicator: {
    backgroundColor: theme.palette.secondary.main
  }
}))(props => <Tabs {...props} />)

const StyledTab = withStyles(theme => ({
  root: {
    color: theme.palette.primary.main,
    flexGrow: 1,
    "&:hover": {
      backgroundColor: theme.palette.secondary.lightBlue,
      opacity: 1,
    },
    "&$selected": {
      color: theme.palette.secondary.main,
      fontWeight: 'bold',
    },
  },
  selected: {}
}))(props => <Tab {...props} />)

export {StyledTabs, StyledTab}
