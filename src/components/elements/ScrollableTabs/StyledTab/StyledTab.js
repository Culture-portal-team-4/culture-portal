import { withStyles } from "@material-ui/core/styles"
import Tab from '@material-ui/core/Tab'

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
}))(Tab)

export default StyledTab
