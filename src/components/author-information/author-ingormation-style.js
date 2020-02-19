import { makeStyles } from '@material-ui/core/styles'

const style = makeStyles(theme => ({
    header: {
        // position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '80px',
        zIndex: 302
    },
    headerContainer: {
        display: 'flex',
        height: '100%',
        borderBottom: `1px solid ${theme.palette.secondary.border}`
    },
    boxLeft: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(3),
        borderRight: `1px solid ${theme.palette.secondary.border}`
    },
    boxRight: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    logoText: {
        background: `linear-gradient(135deg, ${theme.palette.secondary.gradientStart} 20%, ${theme.palette.secondary.gradientEnd} 70%)`,
        textFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
        textTransform: 'uppercase'
    }
}))

export default style
