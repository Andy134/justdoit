import { Button, Fade, TextField } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Critical } from '../../constants/Critical';
import { todoConstants } from '../../constants/todo.constants'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    // boxShadow: theme.shadows[5],
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
  // { id: 1001, title: "Todo 1", content: "content here 1", critical: Critical.IMPORTANT }
  const [todo, setTodo] = useState({
    title: '',
    content: '',
    critical: Critical.TODO
  })

  function handleChange(e) {
    let { id, value } = e.target
    setTodo({ ...todo, [id]: value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: todoConstants.ADD_NEW, todo: todo })
    handleCloseModal()
  }

  return (
    <div className={classes.paper}>
      <h2 id="spring-modal-title">Add New</h2>
      <div>
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <TextField label="Title" variant="outlined" id="title" onChange={handleChange} />
          </div>
          <div>
            <TextField multiline rows={4} label="Content" variant="outlined" id="content" onChange={handleChange} />
          </div>
          <div>
            <Button type="submit" color="primary">Save</Button>
            <Button onClick={() => handleCloseModal()}>Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
