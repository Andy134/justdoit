import { blue, red } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { AuthProvider } from './autherns/AuthContext';
import Navbar from './client/components/Navbar';
import Welcome from './client/components/Welcome';
import Homepage from './client/pages/Homepage';
import Login from './common/Login';
import SignUp from './common/Signup';
import PrivateRoute from './common/PrivateRoute';

const appTheme = createMuiTheme({
  palette: {
    secondary: {
      main: red['A200'],
    },
    primary: {
      main: blue['500'],
    }
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

function App() {

  const [welcome, showWelcome] = useState(true);

  function handleFadeOut() {
    showWelcome(false)
  }

  return (
    <div className="App">
      {welcome ? <Welcome fadeOut={handleFadeOut} /> : <AppContain />}
    </div>
  );
}

function AppContain(props) {
  return (
    <>
      <ThemeProvider theme={appTheme}>
        <AuthProvider>
          <Router>
            <Navbar />
            <Toolbar id="back-to-top-anchor" />
            <Container maxWidth={`sm`}>
              <Switch>
                <PrivateRoute path="/" exact component={() => <Homepage />} />
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/signup">
                  <SignUp />
                </Route>
              </Switch>
            </Container>
          </Router>
        </AuthProvider>
        <Toolbar/>
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </ThemeProvider>
    </>
  )
}

export default App;
