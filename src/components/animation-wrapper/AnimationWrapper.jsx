import posed from 'react-pose'

const animationTime = 300

const AnimationWrapper = posed.div({
  on: {
    opacity: 1,
    x: '0%',
    delay: ({ index }) => index * animationTime
  },
  off: {
    opacity: 0,
    x: '-100%'
  }
})

export default AnimationWrapper
