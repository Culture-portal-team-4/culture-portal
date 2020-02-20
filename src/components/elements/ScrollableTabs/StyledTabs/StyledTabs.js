import { withStyles } from "@material-ui/core/styles"
import Tabs from '@material-ui/core/Tabs'

const StyledTabs = withStyles(theme => ({
  root: {
    borderBottom: "1px solid #e8e8e8"
  },
  indicator: {
    backgroundColor: theme.palette.secondary.main
  }
}))(Tabs)

export default StyledTabs
