import { Divider, IconButton, makeStyles, Menu, MenuItem } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { Critical } from "../../constants/Critical";
import { todoConstants } from "../../constants/todo.constants";

const useStyles = makeStyles((theme) => ({
    buttonRevese: {
        marginLeft: theme.spacing(2),
    }
}));

export default function PostMenu({ id, critical }) {

    const classes = useStyles();

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleUpdateStatus = (crt) => {
        setAnchorEl(null);
        dispatch({ type: todoConstants.UPDATE_CRITICAL, id: id, critical: crt })
    };

    const handleDelete = () => {
        setAnchorEl(null);
        dispatch({ type: todoConstants.DELETE_DATA, id: id });
    };

    return (
        <>
            <IconButton edge="end" aria-label="more" className={classes.buttonRevese} onClick={handleClick}>
                <MoreVert />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    Object.entries(Critical).map((item, index) => {
                        return <MenuItem key={index} onClick={()=>handleUpdateStatus(item[0])} selected={critical === item[0]}>
                            {item[1]}
                        </MenuItem>
                    })
                }
                <Divider />
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
        </>
    )
}