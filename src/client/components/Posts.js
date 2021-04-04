import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import PostItem from './PostItem';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
}));

function Posts() {
   

    const classes = useStyles();
    return (
        <List className={classes.root}>
            {[0, 1, 2, 3].map((value) => {
                return (
                    <PostItem key={value} value={value}/>
                );
            })}
        </List>
    );
}

export default Posts;
