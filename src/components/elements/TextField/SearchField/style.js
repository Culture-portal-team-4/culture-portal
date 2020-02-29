import { makeStyles } from '@material-ui/core/styles'

const style = makeStyles(theme => ({
  root: {
    fontSize: 12,
    fontWeight: 300,
    '&:hover $notchedOutline': {
      borderColor: theme.palette.secondary.main,
      color: theme.palette.secondary.main
    },
    '&:hover': {
      color: theme.palette.secondary.main
    }
  },
  notchedOutline: {}
}))

export default style
