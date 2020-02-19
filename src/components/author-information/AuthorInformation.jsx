import React from 'react';
import PropTypes from 'prop-types';
import styles from './author-ingormation-style';
import { Typography, IconButton } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
//import MenuIcon from '@material-ui/icons/Menu';


const AuthorInformation = ({ handleOpenMenu }) => {
    const classes = styles()

    return (
        <header class={classes.header}>
            <div class={classes.headerContainer}>
                <div className={classes.boxLeft}>
                    <IconButton onClick={handleOpenMenu}>
                        <MenuIcon />
                    </IconButton>
                </div>
                <div className={classes.boxRight}>
                    <div className={classes.logoText}>
                        <Typography variant="h4">Photographers of belarus</Typography>
                    </div>
                </div>
            </div>
        </header>
    )
}

AuthorInformation.propTypes = {
    select: PropTypes.string
}

export default AuthorInformation


const Header = ({ handleOpenMenu }) => {
    const classes = styles()

    return (
        <header class={classes.header}>
            <div class={classes.headerContainer}>
                <div className={classes.boxLeft}>
                    <IconButton onClick={handleOpenMenu}>
                        <MenuIcon />
                    </IconButton>
                </div>
                <div className={classes.boxRight}>
                    <div className={classes.logoText}>
                        <Typography variant="h4">Photographers of belarus</Typography>
                    </div>
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
    select: PropTypes.string
}

export default Header
