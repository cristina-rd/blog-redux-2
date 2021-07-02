import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    minHeight: '15rem',
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function Spinner(props) {
  const classes = useStyles();

  if (props.show) {
    return (
      <div className={classes.root}>
        <CircularProgress />
      </div>
    );
  } else {
    return null;
  }
}