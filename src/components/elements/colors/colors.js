import { makeStyles } from '@material-ui/core/styles'

const style = makeStyles(theme => ({
  main: {
    background: theme.palette.secondary.main,
    height: '40px',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    background: theme.palette.text.title,
    height: '40px',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  border: {
    background: theme.palette.secondary.border,
    height: '40px',
    color: theme.palette.text.title,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  background: {
    background: '#fff',
    height: '40px',
    color: theme.palette.text.title,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `1px solid ${theme.palette.secondary.border}`
  }
}))

export default style
