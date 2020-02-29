import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles(theme => ({

  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),

  },
  link: {
    textDecorationLine: 'none',
    textDecoration: 'none',
  }

}));

export default styles
