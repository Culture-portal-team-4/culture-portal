import { makeStyles } from '@material-ui/core/styles'

const style = makeStyles(theme => ({
  paper: {
    height: '100%'
  },
  content: {
    padding: theme.spacing(0, 2, 2, 2)
  },
  headerTable: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  tableRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(1),
    paddingLeft: '0px'
  },
  tableRowColor: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    display: 'block',
    marginRight: theme.spacing(1)
  },
  difficultRow: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5),
    paddingLeft: '0px'
  },
  difficultIcon: { color: 'red', marginRight: theme.spacing(1) },
  evaluationItem: {
    display: 'flex',
    alignItems: 'center'
  },
  evaluationCheckbox: {
    padding: theme.spacing(0.5, 0.5, 0.5, 0)
  }
}))

export default style
