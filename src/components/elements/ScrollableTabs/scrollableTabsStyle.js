import { makeStyles } from '@material-ui/core/styles'

const scrollableTabsStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.secondary.tabBackground,
    marginTop: 10,
  },
}))

export default scrollableTabsStyle
