import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#49c5b6',
      lightBlue: '#aed1d5',
      border: '#E6EAEA',
      gradientStart: '#061207',
      gradientEnd: '#49c5b6'
    },
    text: {
      title: '#061207',
      primary: '#061207',
      secondary: '#061207'
    }
  },
  typography: {
    button: {
      fontSize: 12,
      fontWeight: 300
    },
    textField: {
      fontSize: 12,
      fontWeight: 300
    }
  }
})

export default theme
