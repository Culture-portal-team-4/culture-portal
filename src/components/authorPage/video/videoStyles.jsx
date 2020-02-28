import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles(() => ({

  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  frame: {
    maxWidth: 560,
    maxHeight: 315,
    position: 'fixed',
    top: 'calc(50% - 157px)',
    left: 'calc(50% - 280px)',
  },
  videoButton: {
    margin: '0 auto',
  }

}));

export default styles