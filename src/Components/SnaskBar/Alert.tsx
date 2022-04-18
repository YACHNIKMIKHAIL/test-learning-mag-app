import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import {useDispatch} from "react-redux";
import {useMagSelector} from "../../App/store";
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import {AxiosError} from "axios";
import {sendedMessage, setError} from "../../App/AppReducer";


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertComponent() {
    const errorMessage = useMagSelector<string | null | AxiosError>(state => state.app.error)
    const isMessageSended = useMagSelector<boolean>(state => state.app.messageSended)
    const dispatch = useDispatch()
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setError({e: null}))
        dispatch(sendedMessage({v:false}))
    };

    return (
        <>
            <Snackbar open={isMessageSended} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Order accepted, check
                        email <MarkEmailReadIcon/></div>
                </Alert>
            </Snackbar>
            <Snackbar open={errorMessage !== null} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                    {errorMessage}
                </Alert>
            </Snackbar>
        </>
    );
}
