import { withStyles} from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.secondary.lightBlue,
    fontSize: '0.9rem',
    fontWeight: 'bold',
    color: theme.palette.text.secondary,
  },
  body: {
    fontSize: '0.9rem',
  },
}))(TableCell)

export default StyledTableCell
