import { makeStyles } from '@material-ui/core/styles'

const paragraphStyle = makeStyles(theme => ({
  root: {
    fontSize: theme.typography.paragraph.fontSize,
    fontFamily: theme.typography.paragraph.fontFamily,
    color: theme.palette.text.secondary,
    letterSpacing: theme.typography.paragraph.letterSpacing,
    lineHeight: theme.typography.paragraph.lineHeight
  }
}))

export default paragraphStyle