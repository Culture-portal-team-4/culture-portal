import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

export default function AnimationWrapper({
  variants,
  index,
  children,
  delay,
  duration,
  show,
  ...other
}) {
  const [isAnimated, setAnimated] = useState(false)

  useEffect(() => {
    setAnimated(show)
  }, [show])

  return (
    <motion.div
      {...other}
      variants={variants}
      initial="off"
      transition={{ delay: index * delay, duration }}
      animate={isAnimated ? 'on' : 'off'}
    >
      {children}
    </motion.div>
  )
}

AnimationWrapper.propTypes = {
  variants: PropTypes.object,
  children: PropTypes.node,
  index: PropTypes.number,
  delay: PropTypes.number,
  duration: PropTypes.number
}

AnimationWrapper.defaultProps = {
  variants: {
    on: {
      opacity: 1,
      x: '0%'
    },
    off: {
      opacity: 0,
      x: '100%'
    }
  },
  delay: 0.3,
  index: 1,
  show: true
}
