import { makeStyles } from '@material-ui/core/styles'

const style = makeStyles(theme => ({
  button: {
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main
    },
  }
}))

export default style
