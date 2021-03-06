import { makeStyles } from '@material-ui/core/styles'

const style = makeStyles(theme => ({
  hours: {
    fontWeight: 'bold',
  },
  list: {
    paddingLeft: 10,
    listStyle: 'none',
  },
  root: {
    height: '100%',
    minWidth: '185px',
  },
}))

export default style
