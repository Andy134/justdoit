import { Button, Fade, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Critical } from '../../constants/Critical';
import * as PostType from '../../constants/PostType';
import { todoConstants } from '../../constants/todo.constants';
import { todoService } from '../../services/todo.service';
import { useAuth } from '../../autherns/AuthContext';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    '& > div': { marginTop: '1rem' }
  }
}));

export default function CreateModal({ show, handleCloseModal }) {
  const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={show}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={show}>
          <ModalBody handleCloseModal={handleCloseModal} />
        </Fade>
      </Modal>
    </div>
  );
}



function ModalBody({ handleCloseModal }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { currentUser } = useAuth();
  const [todo, setTodo] = useState({
    title: '',
    content: '',
    critical: '',
    postType: PostType.IN_PROGRESS,
    email: currentUser.email
  })

  function handleChange(e) {
    let { id, value } = e.target
    setTodo({ ...todo, [id]: value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    todoService.createNew(todo).then((res) => {
      console.log(res)
      if (201 === res.status) {
        dispatch({ type: todoConstants.ADD_NEW, todo: todo })
      }
    }).catch((err) => {
      alert('Create new todo failed')
    });
    handleCloseModal()
  }

  return (
    <div className={classes.paper}>
      <h2 id="spring-modal-title">Add New</h2>
      <div>
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <TextField label="Title" id="title" onChange={handleChange} fullWidth={true} value={todo.title}/>
          </div>
          <div>
            <TextField multiline rows={3} rowsMax={6} label="Content" id="content" onChange={handleChange} fullWidth={true} value={todo.content}/>
          </div>
          <div>
            <FormControl fullWidth={true}>
              <InputLabel id="critical-label">Age</InputLabel>
              <Select
                labelId="critical-label"
                id="critical"
                value={todo.critical}
                onChange={handleChange}
              >
                <MenuItem value=''></MenuItem>
                {Object.entries(Critical).map((item, index) => {
                  return <MenuItem key={index} value={item[0]}>{item[1]}</MenuItem>
                })}
              </Select>
            </FormControl>
          </div>
          <br />
          <div centered={true}>
            <Button type="submit" color="primary">Save</Button>
            <Button onClick={() => handleCloseModal()}>Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
