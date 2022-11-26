// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';
import React from 'react';

const Transition = React.forwardRef((props, ref) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Slide direction="down" ref={ref} {...props} />
));

const BookedModal = function ({ modalOpenBox, handleModalClose }) {
    return (
        <Dialog
            open={modalOpenBox}
            onClose={handleModalClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            TransitionComponent={Transition}
            keepMounted
            maxWidth="xs"
            sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }}
        >
            <DialogTitle id="alert-dialog-title" color="primary">
                Are you sure you want to delete
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description" sx={{ textTransform: 'capitalize' }}>
                    It will be delete permanently
                </DialogContentText>
            </DialogContent>
            <DialogActions
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: 1,
                    m: 1,
                }}
            >
                <Button onClick={handleModalClose}>No</Button>
                {/* <Button onClick={() => handleDeleteYes()} autoFocus>
                    Yes
                </Button> */}
            </DialogActions>
        </Dialog>
    );
};

export default BookedModal;


