import React from 'react'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './config/material.theme'
import Root from './components/root'

function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Root />
      </ThemeProvider>
    </HashRouter>
  )
}

export default App
