import { makeStyles } from '@material-ui/core/styles'
import theme from '../../config/material.theme'

const useStyles = makeStyles({
  media: {
    maxHeight: 240,
    objectFit: 'contain',
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  cardMore: {
    color: theme.palette.secondary.main,
    fontWeight: 500,
    marginLeft: theme.spacing(1)
  }
})

export default useStyles
