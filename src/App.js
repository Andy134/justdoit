import { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Home from './pages/Home';
import Container from '@material-ui/core/Container';

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
      <Container maxWidth={`lg`}>
        <Home />
      </Container>
    </ >
  )
}

export default App;
