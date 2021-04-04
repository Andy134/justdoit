import { Box, Container, Divider, IconButton } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import Posts from '../components/Posts';

function Homepage() {
    return (
        <>
            <Nav />
            <Posts />
            <Container>
                <Divider light />
            </Container>
            <Posts />
        </>
    );
}

function Nav() {
    return (
        <Box display="flex" flexDirection="row-reverse">
            <IconButton aria-label="add">
                <AddCircle color="secondary" />
            </IconButton>
        </Box>
    )
}

export default Homepage;
