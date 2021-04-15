import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoConstants } from '../../constants/todo.constants';
import logo from '../../logo.svg';
import {Critical} from './../../constants/Critical'

const lst1 = [
  { id: 1001, title: "Todo 1", content: "content here 1", critical: Critical.IMPORTANT },
  { id: 1002, title: "Todo 2", content: "content here 2", critical: Critical.IMPORTANT },
  { id: 1003, title: "Todo 3", content: "content here 3", critical: Critical.TODO },
  { id: 1004, title: "Todo 4", content: "content here 4", critical: Critical.TODO },
  { id: 1005, title: "Todo 5", content: "content here 5", critical: Critical.MINOR }
];

const lst2 = [
  { id: 1011, title: "Done 1", content: "content here 1", critical: Critical.IMPORTANT },
  { id: 1012, title: "Done 2", content: "content here 2", critical: Critical.IMPORTANT },
  { id: 1013, title: "Done 3", content: "content here 3", critical: Critical.TODO },
  { id: 1014, title: "Done 4", content: "content here 4", critical: Critical.TODO },
  { id: 1015, title: "Done 5", content: "content here 5", critical: Critical.TODO },
  { id: 1016, title: "Done 6", content: "content here 6", critical: Critical.TODO },
  { id: 1017, title: "Done 7", content: "content here 7", critical: Critical.TODO },
  { id: 1018, title: "Done 8", content: "content here 8", critical: Critical.TODO },
  { id: 1019, title: "Done 9", content: "content here 9", critical: Critical.MINOR }
];

function Welcome({ fadeOut }) {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: todoConstants.ADD_NEW, todos: lst1, done: lst2 })
  }, [])

  const [counter, setCounter] = useState(300);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(prevCount => prevCount - 10);
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);

  useEffect(() => {
    if (counter <= 0) fadeOut()
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
