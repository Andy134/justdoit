import { useEffect, useState } from 'react';
import logo from '../logo.svg';

function Welcome({fadeOut}) {

  const [counter, setCounter] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(prevCount => prevCount - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (counter === 0) fadeOut()
  })

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
