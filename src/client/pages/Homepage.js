import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    cards: {
        marginTop: '.5rem'
    },
    card: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(0),
            width: '100%',
            height: theme.spacing(16),
        },
        marginBottom: '.5rem'
    },
}));

function Homepage() {

    const classes = useStyles();

    return (
        <>
            <div className={classes.cards}>
                <div className={classes.card}>
                    <Paper variant="outlined" square />
                </div>
                <div className={classes.card}>
                    <Paper variant="outlined" square />
                </div>
                <div className={classes.card}>
                    <Paper variant="outlined" square />
                </div>
                <div className={classes.card}>
                    <Paper variant="outlined" square />
                </div>
                <div className={classes.card}>
                    <Paper variant="outlined" square />
                </div>
                <div className={classes.card}>
                    <Paper variant="outlined" square />
                </div>
                <div className={classes.card}>
                    <Paper variant="outlined" square />
                </div>
                <div className={classes.card}>
                    <Paper variant="outlined" square />
                </div>
                <div className={classes.card}>
                    <Paper variant="outlined" square />
                </div>
                <div className={classes.card}>
                    <Paper variant="outlined" square />
                </div>
                <div className={classes.card}>
                    <Paper variant="outlined" square />
                </div>
                <div className={classes.card}>
                    <Paper variant="outlined" square />
                </div>
                <div className={classes.card}>
                    <Paper variant="outlined" square />
                </div>
                <div className={classes.card}>
                    <Paper variant="outlined" square />
                </div>
                <div className={classes.card}>
                    <Paper variant="outlined" square />
                </div>
                <div className={classes.card}>
                    <Paper variant="outlined" square />
                </div>
                <div className={classes.card}>
                    <Paper variant="outlined" square />
                </div>
                <div className={classes.card}>
                    <Paper variant="outlined" square />
                </div>
                <div className={classes.card}>
                    <Paper variant="outlined" square />
                </div>
                <div className={classes.card}>
                    <Paper variant="outlined" square />
                </div>
                <div className={classes.card}>
                    <Paper variant="outlined" square />
                </div>
                <div className={classes.card}>
                    <Paper variant="outlined" square />
                </div>
            </div>
        </>
    );
}

export default Homepage;
