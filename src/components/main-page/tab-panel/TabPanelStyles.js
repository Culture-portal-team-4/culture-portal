import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
    root: {
        width: 1000,
        flexGrow: 1,
        backgroundColor: theme.palette.secondary.main,
    },
}));
export default useStyles;
