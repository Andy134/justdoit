import { useEffect } from 'react';
import logo from '../../logo.svg';

function Welcome({ fadeOut }) {

  useEffect(() => {
    setInterval(function(){ fadeOut() }, 3000);
  }, []);

  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <footer className="App-footer">Snowy App</footer>
    </>
  );
}

export default Welcome;
