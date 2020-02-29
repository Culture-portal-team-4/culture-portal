import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000'
    },
    secondary: {
      main: '#49c5b6',
      lightBlue: '#aed1d5',
      border: '#E6EAEA',
      gradientStart: '#061207',
      gradientEnd: '#49c5b6',
      tabBackground: '#EEEEEE'
    },
    text: {
      title: '#061207',
      primary: '#061207',
      secondary: '#4b4b4b'
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
    h1: {
      fontSize: '60px',
      fontWeight: '500',
      fontFamily: 'GRT, sans-serif',
      color: '#49c5b6',
      lineHeight: 1.375,
      letterSpacing: '.06em'
    },
    h2: {
      fontSize: '48px',
      fontWeight: '500',
      fontFamily: 'apercu, sans-serif',
      color: '#061207',
      lineHeight: 1.375,
      letterSpacing: '.06em'
    },
    h3: {
      fontSize: '40px',
      fontWeight: '500',
      fontFamily: 'apercu, sans-serif',
      color: '#061207',
      lineHeight: 1.375,
      letterSpacing: '.06em'
    },
    h4: {
      fontSize: '32px',
      fontWeight: '500',
      fontFamily: 'apercu, sans-serif',
      color: '#061207',
      lineHeight: 1.375,
      letterSpacing: '.06em',
      '@media (max-width:750px)': {
        fontSize: '1.8rem'
      },
      '@media (max-width:460px)': {
        fontSize: '1.3rem'
      },
      '@media (max-width:360px)': {
        fontSize: '0.8rem'
      }
    },
    h5: {
      fontSize: '24px',
      fontWeight: '500',
      fontFamily: 'apercu, sans-serif',
      color: '#061207',
      lineHeight: 1.375,
      letterSpacing: '.06em',
      '@media (max-width:930px)': {
        fontSize: '1.3rem'
      },
      '@media (max-width:830px)': {
        fontSize: '1rem'
      }
    },
    h6: {
      fontSize: '19px',
      fontWeight: '500',
      fontFamily: 'apercu, sans-serif',
      color: '#061207',
      lineHeight: 1.375,
      letterSpacing: '.06em'
    },
    signature: {
      fontSize: '11px',
      fontFamily: 'apercu, sans-serif',
      color: '#061207'
    },
    paragraph: {
      fontSize: '16px',
      fontFamily: 'apercu, sans-serif',
      lineHeight: 1.375,
      letterSpacing: '.06em'
    }
  },
  headerHeight: '80px',
  menuWidth: '300px'
})

export default theme
