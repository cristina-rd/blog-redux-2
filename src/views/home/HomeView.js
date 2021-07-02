import React, { useState, Fragment } from "react";
import { useHistory } from 'react-router-dom';
/* import { connect, useDispatch } from 'react-redux';
import axios from "axios";
 */
import useAllPosts from "../../hooks/home/useAllPosts";

import Spinner from '../../components/Spinner';
import LittlePostCard from "./components/LittlePostCard";
import CreatePostButton from "./components/CreatePostButton";

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    button: {
        margin: '1rem',
        padding: '1rem 2rem 1rem 2rem',
        maxWidth: '20rem',
        alignSelf: 'center',
        backgroundColor: '#3f51b5',
        color: 'white',
        '&:hover': {
            color: '#3f51b5',
        },
    }
}));


function HomeView (props) {
    const history = useHistory();
/*     const dispatch = useDispatch();
 */    const posts = useAllPosts();
    const classes = useStyles();
    const [token, setToken] = useState(null);

    return (
        <Fragment>
            <div className={classes.header} >
                <h1>Posts</h1>
                {token
                    ? <Button
                        size='small'
                        onClick={() => {
                            sessionStorage.removeItem('token');
                            window.location.reload();
                        }} >
                        Logout
                    </Button>
                    : <Button
                        size='small'
                        className={classes.button}
                        onClick={() => history.push('/register_login')}
                    >
                        Register / Login
                    </Button>}
            </div>
{}            <Spinner show={posts.isLoading} />
            <div className={classes.content}>
                {posts.data?.data.map(post => {
                    return <LittlePostCard title={post.title} content={post.body} postId={post.id} key={post.id} buttonText='Read more' width={350} />
                })}
            </div>
            {token ? <CreatePostButton /> : null}
        </Fragment>
    );
}


export default HomeView;