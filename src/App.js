import { red } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Homepage from './pages/Homepage';

const appTheme = createMuiTheme({
  palette: {
    secondary: {
      main: red[500],
    }
  },
});

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

function AppContain() {
  return (
    <>
      <ThemeProvider theme={appTheme}>
        <Navbar />
        <Toolbar />
        <Container maxWidth={`lg`}>

          <Homepage />

        </Container>
      </ThemeProvider>
    </>
  )
}

export default App;
