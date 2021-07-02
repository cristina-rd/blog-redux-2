import React from 'react';

import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '80rem',
        '& > * + *': {
            marginTop: theme.spacing(5),
        },
        zIndex: 1,
        position: 'fixed',
    },
}));

export default function AlertDeletedSuccess(props) {
    const classes = useStyles();
    if (props.show) {
        return (
            <div className={classes.root}>
                <Alert severity="success">You have deleted the post!</Alert>
            </div>
        )
    } else return null;
}