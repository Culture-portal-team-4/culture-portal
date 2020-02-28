import { makeStyles } from '@material-ui/core/styles'

const style = makeStyles(theme => ({
  list: {
    paddingTop: theme.spacing(0),
    listStyle: 'none',
    borderRight: `1px solid ${theme.palette.secondary.border}`,
    width: theme.menuWidth,
    height: `100%`
  },
  listItem: {
    display: 'flex',
    padding: theme.spacing(2),
    textDecoration: 'none',
    color: theme.palette.primary.main,
    borderBottom: `1px solid ${theme.palette.secondary.border}`,
    '&:hover': {
      backgroundColor: `${theme.palette.secondary.main}10`,
      color: theme.palette.secondary.main,
      '& svg': {
        color: theme.palette.secondary.main
      }
    }
  },
  listItemActive: {
    color: theme.palette.secondary.main,
    backgroundColor: `${theme.palette.secondary.main}10`,
    '& svg': {
      color: theme.palette.secondary.main
    }
  },
  listItemIcon: {
    minWidth: 'auto',
    marginRight: theme.spacing(1)
  }
}))

export default style
