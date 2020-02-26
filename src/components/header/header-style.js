import { makeStyles } from '@material-ui/core/styles'

const headerStyle = makeStyles(theme => ({
  header: {
    // position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '80px',
    zIndex: 302
  },
  headerContainer: {
    display: 'flex',
    height: '100%',
    borderBottom: `1px solid ${theme.palette.secondary.border}`,
    justifyContent: 'space-between',
  },
  boxLeft: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(3),
    borderRight: `1px solid ${theme.palette.secondary.border}`
  },
  boxCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: '0 20px',
  },
  boxRight: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0,
    paddingRight: 20,
  },
  logoText: {
    background: `linear-gradient(135deg, ${theme.palette.secondary.gradientStart} 20%, ${theme.palette.secondary.gradientEnd} 70%)`,
    textFillColor: 'transparent',
    WebkitBackgroundClip: 'text',
    textTransform: 'uppercase',
  }
}))

export default headerStyle
