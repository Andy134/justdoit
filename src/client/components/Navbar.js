import { Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import React from 'react';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1
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
    const history = useHistory();
    return (
        <React.Fragment>
            <ElevationScroll {...props}>
                <AppBar color='inherit'>
                    <Container disableGutters>
                        <Toolbar>
                            <div className={classes.title}>
                                <Typography variant="h6" onClick={()=>history.push('/')}>
                                    MEMO
                                </Typography>
                            </div>
                            <Button onClick={()=>history.push('/login')} color="inherit" >Login</Button>
                            <Button onClick={()=>history.push('/signup')} color="inherit" >Signup</Button>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
        </React.Fragment>
    );
}
