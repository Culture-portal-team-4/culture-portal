import { makeStyles } from '@material-ui/core/styles'

const scrollableTabsStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '100%'
    // backgroundColor: theme.palette.secondary.tabBackground
  }
}))

export default scrollableTabsStyle
