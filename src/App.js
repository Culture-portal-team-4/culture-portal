import React, { Fragment } from 'react'

import Header from './components/header'
import Footer from './components/Footer'

function App({ children }) {
  return (
    <Fragment>
      <Header select="select lang" />
      <main> {children} </main>
      <Footer />
    </Fragment>
  )
}

export default App
