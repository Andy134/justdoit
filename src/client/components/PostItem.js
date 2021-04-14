import { Collapse, IconButton, List, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React, { useEffect } from 'react';
import * as PostType from '../../constants/PostType';

const useStyles = makeStyles((theme) => ({
    nested: {
        paddingLeft: theme.spacing(4),
    },
    buttonRevese: {
        marginLeft: theme.spacing(2),
    }
}));

export default function PostItem({ data, type }) {
    const { id, title, content, critical } = data

    const [checked, setChecked] = React.useState(type === PostType.IN_PROGRESS ? false : true);
    const [open, setOpen] = React.useState(false);
    const [display, setDisplay] = React.useState(true);

    const classes = useStyles();
    const labelId = `checkbox-list-secondary-label-${id}`;

    const handleClick = () => {
        setOpen(!open);
    };

    const handleToggle = () => {
        setChecked((pre) => !pre)
    };

    useEffect(() => {
        if ((type === PostType.COMPLETE && checked === false) || (type === PostType.IN_PROGRESS && checked === true)) {
            setDisplay(false)
        }
    }, [checked])

    return (
        <>
            {display &&
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
                            <Checkbox
                                edge="end"
                                color={type === PostType.IN_PROGRESS ? "secondary" : "primary"}
                                onChange={handleToggle}
                                checked={checked}
                                inputProps={{ 'aria-labelledby': labelId }}
                                className={classes.buttonRevese}
                            />
                            <IconButton edge="end" aria-label="more" className={classes.buttonRevese}>
                                <MoreVertIcon />
                            </IconButton>
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
            }
        </>
    )
}