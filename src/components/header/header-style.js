import { makeStyles } from '@material-ui/core/styles'

const headerStyle = makeStyles(theme => ({
  header: {
    top: 0,
    left: 0,
    width: '100%',
    height: '80px',
    zIndex: 302,
    background: theme.palette.secondary.main,
    boxShadow: '2px 2px 4px -2px rgba(147, 152, 167, 0.62)'
  },
  headerContainer: {
    display: 'flex',
    height: '100%',
    borderBottom: `1px solid ${theme.palette.secondary.border}`,
    justifyContent: 'space-between'
  },
  boxLeft: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(3)
  },
  boxCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: '0 20px'
  },
  boxRight: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0,
    paddingRight: 20
  },
  logoText: {
    color: '#fff !important'
  },
  select: {
    '& div': {
      color: '#fff'
    },
    '& svg': {
      color: '#fff'
    }
  }
}))

export default headerStyle
