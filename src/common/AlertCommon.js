import { Fade, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Alert from '@material-ui/lab/Alert';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { alertConstant } from '../constants/alert.constants'

export default function AlertCommon() {
    const [showState, setShow] = useState(false);
    const { show, severity, message } = useSelector(state => state.alert)
    const dispatch = useDispatch()
    useEffect(() => {
        setShow(show)
    }, [show])
    function handleClose() {
        dispatch({ type: alertConstant.HIDE_ALERT })
    }

    return <>
        <Fade in={showState}>
            <Alert
                variant="outlined"
                severity={severity}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={handleClose}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
            >
                {message}
            </Alert>
        </Fade>
    </>
}