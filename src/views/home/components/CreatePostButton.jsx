import React from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },

    fab: {
        position: 'fixed',
        bottom: theme.spacing(15),
        right: `${window.screen.width/2}px`,
    },
}));

export default function CreatePostButton() {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.root}>
            <Fab color="primary" aria-label="add" className={classes.fab} onClick={() => history.push('/new_post')}>
                <AddIcon />
            </Fab>
        </div>
    );
}
