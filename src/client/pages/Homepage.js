import { Box, Divider, IconButton } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import * as PostType from '../../constants/PostType';
import CreateModal from '../components/CreateModal';
import Posts from '../components/Posts';

function Homepage() {

    const todo = useSelector(state => state.todo)
    const [showModal, setShowModal] = useState(false)
    function handleShowModal(){
        setShowModal(true)
    }
    function handleCloseModal(){
        setShowModal(false)
    }

    return (
        <>
            <Nav showModal={handleShowModal}/>
            <Posts type={PostType.IN_PROGRESS} data={todo.todos} />
            <Divider light />
            <Posts type={PostType.COMPLETE} data={todo.done} />
            <CreateModal show={showModal} handleCloseModal={handleCloseModal}/>
        </>
    );
}

function Nav({showModal}) {
    return (
        <Box display="flex" flexDirection="row-reverse">
            <IconButton aria-label="add" onClick={showModal}>
                <AddCircle color="secondary"/>
            </IconButton>
        </Box>
    )
}

export default Homepage;
