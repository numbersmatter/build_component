import React from 'react';

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from '@mui/material'


// const useStyles = makeStyles((theme)=>({
//   button: {
//     textTransform: "none",
//   },
// }
// ));

export interface FormTextDialogProps {
  title: string,
  dialogContent?: string,
  placeholder: string,
  submitFunc: (value: string)=>void,
  buttonType: "icon" | "text",
  buttonIcon?: React.ReactNode,
  submitButtonText?: string, 
}

export default function FormTextDialog(props: FormTextDialogProps) {
  const classes = {
    button: {
          textTransform: "none",
        },
  };
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setInputValue("");
  };

  const handleChange = (e: any) => {
    setInputValue(e.target.value)
  }

  const handleSubmitButton = (formValue: string) =>{
    props.submitFunc(formValue);
    handleClose();
  }

  const buttonOptions = {
    "text": <Button  variant="outlined"color="primary" onClick={handleClickOpen}>{props.title}</Button>,
    "icon": <IconButton onClick={handleClickOpen}> {props.buttonIcon} </IconButton>,
  };

  return (
    <div>
      {buttonOptions[props.buttonType]}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.dialogContent}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            value={inputValue}
            onChange={event => { handleChange(event) }}
            id="inputValue"
            label={props.placeholder}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleSubmitButton(inputValue)} color="primary">
            {props.submitButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};