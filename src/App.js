import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './config/material.theme'
import Root from './components/root'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Root />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
