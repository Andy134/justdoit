import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import PostItem from './PostItem';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
}));

function Posts({ type, data, ...props }) {

    const classes = useStyles();
    return (
        <>
            {!data
                ?
                <Typography variant="body1">No data</Typography>
                :
                <List className={classes.root}>
                    {data.map((item, index) => {
                        return (
                            <PostItem key={index} data={item} type={type} />
                        );
                    })}
                </List>}
        </>
    );
}

export default Posts;
