import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import {
  Button,
  Dialog,
  MuiDialogTitle,
  MuiDialogContent,
  MuiDialogActions,
  IconButton,
  CloseIcon,
  Typography,
  Paper,
  TextField
} from '@mui/material'


import FormTextDialog from './FormTextDialog';
import ProjectRequestCard from './ProjectRequestCard';
// import { EditOutlined } from '@material-ui/icons';
// import TaskService from '../../services/task.service';

// import { makeStyles } from '@material-ui/styles';


const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    notePaper: {
      margin:10,
      padding: 3,
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });


export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  placeholder: string;
  onClose: () => void;
  submitFunc: (value: string) =>void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      <FormTextDialog
        buttonType='icon'
        buttonIcon={<EditOutlined/>}
        submitFunc={props.submitFunc}
        title="Rename Task"
        dialogContent="Enter new task name"
        placeholder={props.placeholder}
        submitButtonText='Rename'
      />
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


const useStyles= makeStyles({
  notePaper: {
    margin:10,
    padding: 3,
  },
})

export default function TaskDetails(props: TaskDetailsProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [noteValue, setNoteValue] = React.useState(props.notes)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const returnString= (value: string | undefined)=> {
    if(!value){
      return ""
    }
    return value
  }

  const handleTaskRename = (value:string) => {
    TaskService.updateTaskTitle(props.createdBy, props.projectId, props.taskID, value)
  } 

  const handleSaveChanges = (value:string)=> {
    TaskService.updateTaskNote(props.createdBy, props.projectId, props.taskID, value)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNoteValue(event.target.value);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Task Details
      </Button>
      <Dialog 
        onClose={handleClose} 
        aria-labelledby="customized-dialog-title" 
        open={open}
        fullWidth={true}
        maxWidth={false}
      >
        <DialogTitle 
          id="task-title" 
          onClose={handleClose}
          submitFunc={handleTaskRename}
          placeholder={props.title}
        >
          {props.title}
        </DialogTitle>
        <DialogContent dividers>
        <ProjectRequestCard
          commissionType={props.type}
          requesterName={props.requestData.requesterName}
          dateCreated={props.dateCreated}
          questionRespArray={props.requestData.userResponse}
          commissionStatus='In Project'
          username='no user'
          projectsLoading={false}
          
        />
        <Paper className={classes.notePaper}>
          <TextField
            id="inputContext"
            label="Add Notes"
            value={noteValue}
            name="contextText"
            fullWidth
            multiline
            minRows={8}
            maxRows={16}
            onChange={handleChange}
          />
        </Paper>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={()=>handleSaveChanges(returnString(noteValue))} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export interface TaskDetailsProps {
  createdBy: string,
  dateCreated?: any,
  requestData?: any,
  title: string,
  type?: string,
  projectId:string,
  taskID: string,
  notes?:string
};

