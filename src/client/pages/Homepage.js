import { Box, Divider, IconButton } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as PostType from '../../constants/PostType';
import CreateModal from '../components/CreateModal';
import Posts from '../components/Posts';
import {todoService} from '../../services/todo.service'
import {todoConstants} from '../../constants/todo.constants'

function Homepage() {

    const todo = useSelector(state => state.todo)
    const [showModal, setShowModal] = useState(false)

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
        }
    }, [inprocess, done])

    function handleShowModal() {
        setShowModal(true)
    }
    function handleCloseModal() {
        setShowModal(false)
    }

    return (
        <>
            <Nav showModal={handleShowModal} />
            <Posts type={PostType.IN_PROGRESS} data={todo.todos} />
            {todo.todos.length > 0 && todo.done.length > 0 && <Divider light />}
            <Posts type={PostType.COMPLETE} data={todo.done} />
            <CreateModal show={showModal} handleCloseModal={handleCloseModal} />
        </>
    );


}

function Nav({ showModal }) {
    return (
        <Box display="flex" flexDirection="row-reverse">
            <IconButton aria-label="add" onClick={showModal}>
                <AddCircle color="secondary" />
            </IconButton>
        </Box>
    )
}

export default Homepage;
