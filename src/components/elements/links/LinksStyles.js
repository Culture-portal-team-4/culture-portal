import { makeStyles } from '@material-ui/core/styles'
import theme from '../../../config/material.theme'

const useStyles = makeStyles({
  cardMore: {
    color: theme.palette.secondary.main,
    fontWeight: 500,
    marginLeft: theme.spacing(1),
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
  }
})

export default useStyles
