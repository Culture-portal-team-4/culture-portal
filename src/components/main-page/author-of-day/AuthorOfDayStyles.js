import { makeStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const styles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: '0 auto'
  },
  media: {
    minHeight: 340,
    maxHeight: 340,
    objectFit: 'contain',
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
    // paddingTop: '100%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}))
export default styles
