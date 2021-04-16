import { Divider, IconButton, makeStyles, Menu, MenuItem } from "@material-ui/core"
import { MoreVert } from "@material-ui/icons";
import React from "react";
import { Critical } from "../../constants/Critical";

const useStyles = makeStyles((theme) => ({
    buttonRevese: {
        marginLeft: theme.spacing(2),
    }
}));

export default function PostMenu() {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
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
                    Object.entries(Critical).map((item) => {
                        console.log(item);
                        return <MenuItem onClick={handleClose} value={item[1]}>
                            {item[0]}
                        </MenuItem>
                    })
                }
                <Divider />
                <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu>
        </>
    )
}