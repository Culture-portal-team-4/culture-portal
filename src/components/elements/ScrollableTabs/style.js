import { makeStyles } from '@material-ui/core/styles'

const style = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: theme.palette.secondary.tabBackground,
    marginTop: 10,
  },
}))

export default style
