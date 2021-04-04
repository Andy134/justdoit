import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import React from 'react';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        logo: {
            height: '24px'
        }
    }),
);

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

export default function Navbar(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <ElevationScroll {...props}>
                <AppBar color='inherit'>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            JUST DO IT
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </React.Fragment>
    );
}
