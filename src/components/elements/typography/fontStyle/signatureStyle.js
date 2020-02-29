import { makeStyles } from '@material-ui/core/styles'

const signatureStyle = makeStyles(theme => ({
  root: {
    fontSize: theme.typography.signature.fontSize,
    fontFamily: theme.typography.signature.fontFamily,
    color: theme.typography.signature.color
  }
}))

export default signatureStyle