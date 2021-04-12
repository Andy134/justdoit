import { Box, Divider, IconButton } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import Posts from '../components/Posts';
import * as Critical from '../constants/Critical';
import * as PostType from '../constants/PostType';

const lst1 = [
    { id: 1001, title: "Todo 1", content: "content here 1", critical: Critical.IMPORTANT },
    { id: 1002, title: "Todo 2", content: "content here 2", critical: Critical.IMPORTANT },
    { id: 1003, title: "Todo 3", content: "content here 3", critical: Critical.TODO },
    { id: 1004, title: "Todo 4", content: "content here 4", critical: Critical.TODO },
    { id: 1005, title: "Todo 5", content: "content here 5", critical: Critical.MINOR }
];
const lst2 = [
    { id: 1006, title: "Todo complete 1", content: "content here 6", critical: Critical.IMPORTANT },
    { id: 1007, title: "Todo complete 2", content: "content here 7", critical: Critical.TODO },
    { id: 1008, title: "Todo complete 3", content: "content here 8", critical: Critical.TODO },
    { id: 1009, title: "Todo complete 4", content: "content here 9", critical: Critical.MINOR }
];

function Homepage() {
    return (
        <>
            <Nav />
            <Posts type={PostType.IN_PROGRESS} data={lst1} />
            <Divider light />
            <Posts type={PostType.COMPLETE} data={lst2} />
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
