import React from 'react';

import { Droppable } from 'react-beautiful-dnd';
import {
  Grid,
  Container,
  Paper,
  Typography,
  IconButton
} from '@mui/material';
import HighlightOffOutlinedIcon from '@mui/material';
import EditOutlinedIcon from '@mui/material';



//import FormDialog from './FormDialog';
import FormTextDialog from './FormTextDialog';
import ProjectService from '../../services/project.service';

import CommCard from './CommCard';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 8,
    padding:0,
    maxWidth:350,
  },
  paperColumn: {
    margin: 0, 
    minWidth: 290,
    minHeight: 400,
    textAlign: "center",
    border: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    borderColor: "lightgrey",
    padding:4,
  },
  droppableSection: {
    padding: 4,
    backgroundColor: 'white',
    minHeight: 400,

  },
  droppableSectionOver: {
    padding: 4,
    backgroundColor: 'lightgray'
  }
}));

export interface DroppableColumnProps {
  taskIDs: any,
  tasks: any,
  title: string,
  colId: string,
  userId: string,
  projectId: string,
  columnOrderArr: any,
  columns: any,
}


export default function DroppableColumn(props: DroppableColumnProps) {
  const classes = useStyles();
  const taskIDs = props.taskIDs;
  const tasks = props.tasks;
  const title = props.title;
  const colId = props.colId;
  const userId = props.userId;
  const projectId = props.projectId;
  const columnOrderArr = props.columnOrderArr;
  


  let taskDetails: any = {};
  
  if (tasks) {

    tasks.docs.map((task: any, ind: number)=>(
      taskDetails[task.id]=task.data()
      ));
      
  }
  
  const handleRenameCol = (newColName:string) =>{
    ProjectService.renameProjectColumn(userId,projectId, colId, newColName)
  }

  const makeTaskList = (tasksIds: string[]) =>{
    if(!taskIDs) {
      return (
        <Grid>
          <Typography>No tasks found</Typography>
        </Grid>
      )
    }
    if(taskIDs.length >0){
      return(
      taskIDs.map( (taskID: any, ind: number) =>(
        <Grid item key={taskID}>
        <CommCard 
          id={taskID} 
          index={ind} 
          taskDetails={taskDetails[taskID]}
          projectId={projectId}
        />
        </Grid>
      )))
    } else {
      <Grid>
        <Typography>No tasks found</Typography>
      </Grid>
    }

  }

  



  return (
    <Container className={classes.container}>
      <Paper elevation={3} className={classes.paperColumn}>
      <Grid container direction='row' alignItems='center' justifyContent='space-between'>
      <Grid item>
      <FormTextDialog
        buttonType='icon'
        buttonIcon = {<EditOutlinedIcon/>}
        submitFunc ={handleRenameCol}
        title="Rename Column"
        dialogContent="Enter new name for column"
        placeholder= {title}
        submitButtonText = "Rename"
      />
      

      </Grid>
      <Grid item>
      <Typography variant='subtitle1' >{title}</Typography>
      </Grid>
      
      <Grid item>
      <IconButton
        onClick={()=>ProjectService.deleteColumn(userId, projectId, colId, taskIDs, columnOrderArr)}>
      <HighlightOffOutlinedIcon/>
      </IconButton>
      </Grid>
      </Grid>
        <Droppable droppableId={colId}>
          { (provided, snapshot) =>(

            <Grid 
              innerRef={provided.innerRef}
              {...provided.droppableProps}
              className={
                !snapshot.isDraggingOver
                ? classes.droppableSection
                : classes.droppableSectionOver} 
              container 
              direction="column" 
              spacing={1}
            >
              {makeTaskList(taskIDs)}
              {provided.placeholder}
            </Grid>
          )}
        </Droppable>
      </Paper>
    </Container>
  );

}