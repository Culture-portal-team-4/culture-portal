import React from 'react'
import styles from './colors'

export default function Colors() {
  const clasess = styles()
  return (
    <div>
      <div className={clasess.main}>#49c5b6</div>
      <div className={clasess.text}>#061207</div>
      <div className={clasess.border}>#E6EAEA</div>
      <div className={clasess.background}>#FFFFFF</div>
    </div>
  )
}
