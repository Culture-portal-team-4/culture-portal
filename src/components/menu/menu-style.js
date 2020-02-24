import { makeStyles } from '@material-ui/core/styles'

const menuStyle = makeStyles(theme => ({
  list: {
    marginTop: theme.spacing(2)
  },
  listItem: {
    display: 'flex',
    padding: theme.spacing(2),
    textDecoration: 'none',
    color: theme.palette.primary.main,
    borderBottom: `1px solid ${theme.palette.secondary.border}`,
    '&:hover': {
      backgroundColor: `${theme.palette.secondary.main}40`
    }
  },
  listItemActive: {
    backgroundColor: `${theme.palette.secondary.main}40`
  },
  listItemIcon: {
    minWidth: 'auto',
    marginRight: theme.spacing(1)
  }
}))

export default menuStyle
