import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { todoConstants } from '../../constants/todo.constants';
import logo from '../../logo.svg';
import * as PostType from './../../constants/PostType';
import { todoService } from './../../services/todo.service';

function Welcome({ fadeOut }) {

  const [inprocess, setInprocess] = useState()
  const [done, setDone] = useState()
  const dispatch = useDispatch();

  useEffect(() => {
      Promise.all([
        todoService.getTodoLst(PostType.IN_PROGRESS).then((response) => {
          setInprocess(response.data.content);
        })
        ,
        todoService.getTodoLst(PostType.COMPLETE).then((response) => {
          setDone(response.data.content);
        })
      ]);
  }, [])

  useEffect(() => {
    if (inprocess !== undefined && done !== undefined) {
      dispatch({ type: todoConstants.GET_DATA, todos: inprocess, done: done })
      handleFadeout()
    }
  }, [inprocess, done])

  function handleFadeout() {
    fadeOut()
  }

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
