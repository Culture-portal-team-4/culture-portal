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
      gradientEnd: '#49c5b6',
      tabBackground: '#EEEEEE',
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
    },
    h4: {
      '@media (max-width:750px)': {
        fontSize: '1.8rem',
      },
      '@media (max-width:460px)': {
        fontSize: '1.3rem',
      },
      '@media (max-width:360px)': {
        fontSize: '0.8rem',
      },
    },
    h5: {
      fontSize: '1.5rem',
      '@media (max-width:930px)': {
        fontSize: '1.3rem',
      },
      '@media (max-width:830px)': {
        fontSize: '1rem',
      },
    }

  }
})

export default theme
