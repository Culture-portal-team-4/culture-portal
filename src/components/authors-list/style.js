import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  media: {
    maxHeight: 240,
    objectFit:'contain',
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }
})

export default useStyles
