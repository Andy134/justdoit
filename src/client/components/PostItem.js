import { Collapse, IconButton, List, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    nested: {
        paddingLeft: theme.spacing(4),
    },
    buttonRevese: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1)
    }
}));

export default function PostItem({ value }) {

    const [checked, setChecked] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const labelId = `checkbox-list-secondary-label-${value}`;

    const handleClick = () => {
        setOpen(!open);
    };

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <>
            <ListItem button onClick={handleClick}>
                <ListItemAvatar>
                    <Avatar
                        alt={`Avatar n°${value + 1}`}
                        src={`/static/images/avatar/${value + 1}.jpg`}
                    />
                </ListItemAvatar>
                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                <ListItemSecondaryAction>
                    <Checkbox
                        edge="end"
                        color="primary"
                        onChange={handleToggle(value)}
                        checked={checked.indexOf(value) !== -1}
                        inputProps={{ 'aria-labelledby': labelId }}
                        className={classes.buttonRevese}
                    />
                    <IconButton edge="end" aria-label="more" className={classes.buttonRevese}>
                        <MoreVertIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <Typography variant="body2" color="textSecondary">
                            Content here ...
                        </Typography>
                    </ListItem>
                </List>
            </Collapse>
        </>
    )
}