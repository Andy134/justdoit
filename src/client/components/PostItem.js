import { Collapse, List, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as PostType from '../../constants/PostType';
import { todoConstants } from '../../constants/todo.constants';
import PostMenu from './PostMenu';

const useStyles = makeStyles((theme) => ({
    nested: {
        paddingLeft: theme.spacing(4),
    },
    buttonRevese: {
        marginLeft: theme.spacing(2),
    }
}));

export default function PostItem({ data, type }) {
    const dispatch = useDispatch();
    const { id, title, content, critical } = data

    const [checked, setChecked] = React.useState(type === PostType.IN_PROGRESS ? false : true);
    const [open, setOpen] = React.useState(false);

    const classes = useStyles();
    const labelId = `checkbox-list-secondary-label-${id}`;

    const handleClick = () => {
        setOpen(!open);
    };

    const handleToggle = () => {

        setChecked((pre) => !pre)

        setTimeout(() => {
            dispatch({
                type: todoConstants.UPDATE_STATUS,
                id: data.id,
                postType: type
            })
        }, 250);
    };

    useEffect(() => {
        setChecked(type === PostType.IN_PROGRESS ? false : true)
        setOpen(false)
    }, [data])

    return (
        <>
            <ListItem button onClick={handleClick}>
                <ListItemAvatar>
                    <Avatar
                        alt={`Avatar n°${critical + 1}`}
                        src={`/static/images/avatar/${critical}.png`}
                    />
                </ListItemAvatar>
                <ListItemText id={labelId} primary={title} />
                <ListItemSecondaryAction>

                    {type === PostType.IN_PROGRESS && <PostMenu id={id}/>}
                    <Checkbox
                        edge="end"
                        color={type === PostType.IN_PROGRESS ? "primary" : "secondary"}
                        onChange={handleToggle}
                        checked={checked}
                        inputProps={{ 'aria-labelledby': labelId }}
                        className={classes.buttonRevese}
                    />

                </ListItemSecondaryAction>
            </ListItem>

            {/* Collapse */}
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <Typography variant="body2" color="textSecondary">
                            {content}
                        </Typography>
                    </ListItem>
                </List>
            </Collapse>
        </>
    )
}