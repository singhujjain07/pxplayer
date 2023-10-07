import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert, Slide, IconButton,AlertTitle} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Progress } from '.';


function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }

function Message() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setTimeout(()=>{
            setOpen(true);
        },2000);

        // Set a timer to close the alert after 5 seconds (5000 milliseconds)
        setTimeout(() => {
            setOpen(false);
        }, 7000);
    };

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        handleOpen(); // Call your function here
    }, []);

    return (
        <Snackbar
            style={{margin:'0px'}}
            open={open}
            autoHideDuration={5000} // This is optional and sets the duration in milliseconds
            onClose={handleClose}
            TransitionComponent={SlideTransition} // Use the custom slide-in transition
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
            <Alert
            severity="info"
            // color="error"
            variant="filled"
            style={{ backgroundColor: 'gray', color: 'white' , padding:'0px 20px'}} 
                onClose={handleClose}
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
                sx={{ mb: 2 , backgroundColor:"white"}}
            >
                <AlertTitle>New Feature!</AlertTitle>
                Now Voice Search Enabled!
                <Progress/>
            </Alert>
        </Snackbar>

    );
}

export default Message;
