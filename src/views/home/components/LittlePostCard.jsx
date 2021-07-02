import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 350,
        minHeight: 250,
        maxHeight: 275,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 10,
    },
    title: {
        fontSize: 20,
        marginBottom: 15
    },
});

export default function LittlePostCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textPrimary" variant='h5' component="h2">
                    {props.title}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.content}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/post/${props.postId}`}>
                    <Button size="small">{props.buttonText}</Button>
                </Link>
            </CardActions>
        </Card>
    );
}
