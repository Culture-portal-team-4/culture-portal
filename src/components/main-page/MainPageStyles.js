import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles(theme => ({
  container: {
    height: 'calc(100% - 50px)'
  },
  paper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  avatar: {
    background: '#f3f3f3',
    padding: theme.spacing(2),
    '& div': {
      width: theme.spacing(30),
      height: theme.spacing(30),
      margin: '0 auto'
    }
  }
}))

export default styles
