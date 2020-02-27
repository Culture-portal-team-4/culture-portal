import React from 'react';
import FaceIcon from '@material-ui/icons/Face';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import styles from './AuthorOfDayStyles';
import data from '../../../data/data.json';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const getRandomArbitrary=() =>{
    return (Math.floor(Math.random() * 4));
};

AuthorOfDay.propTypes = {
    randomAuthorData: PropTypes.array
};
AuthorOfDay.defaultProps = {
    randomAuthorData: data.photographers,
};

export default function AuthorOfDay(props) {
    const classes = styles();
    const randomAuthorDetails = props.randomAuthorData[getRandomArbitrary()];
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {randomAuthorDetails.name[0]}
                    </Avatar>
                }
                title={randomAuthorDetails.name}
                subheader={randomAuthorDetails.yearsOfLife}
            />
            <CardMedia
                className={classes.media}
                image={randomAuthorDetails.img}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {randomAuthorDetails.biography[0].info}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    aria-label="show more"
                >
                    <Link to={"/authors"}>
                        <FaceIcon/>
                    </Link>
                </IconButton>
            </CardActions>
        </Card>
    );
}
