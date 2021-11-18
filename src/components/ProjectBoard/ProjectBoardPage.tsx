import React from 'react';
// import {  useDocumentData, useCollection } from 'react-firebase-hooks/firestore';
import { makeStyles } from '@mui/material';
// import {
//   useParams
// } from 'react-router-dom';

import {
  Button,
  Grid,
  Typography,
  Paper,
  Box,
} from '@mui/material'


// import FormDialog from '../reusable/FormDialog';
import FormTextDialog from './FormTextDialog';


import OrganizeComms from './OrganizeComms';
import DroppableColumn from './DroppableColumn';
// import ProjectService from '../../services/project.service';

import TestProjectData from './placeholder'



// const useStyles= makeStyles((theme)=>({
//   profileImage: {
//     "max-width": 345,
//   },
//   commFormBlock:{
//     "margin": 10,
//   },
//   artistName:{
//     root: {
//       margin:"1.5em"
//     }
//   },
//   formPaper: {
//     backgroundColor: '#8fb7c321',
//     minWidth: "90%vw"

//   },
//   dropArea: {
//     width:'100%',
//     overflowX: 'scroll'
//   }
// }));



export interface ProjectPageRouteParams {
  projectId: string,
};

export interface ProjectPageProps {
  username:string
}


export default function ProjectBoardPage(props: ProjectPageProps) {
  const classes = {
    profileImage: {
      "max-width": 345,
    },
    commFormBlock:{
      "margin": 10,
    },
    artistName:{
      root: {
        margin:"1.5em"
      }
    },
    formPaper: {
      backgroundColor: '#8fb7c321',
      minWidth: "90%vw"
  
    },
    dropArea: {
      width:'100%',
      overflowX: 'scroll'
    }
  }
  const  projectId  = 'testId';

  // const [projectData, projectLoading, projectError] = useDocumentData(ProjectService.getProjectRef(props.username, projectId));
  const projectData = TestProjectData;



  // const [ projectTasks, projectTasksLoading, projectTasksError] = useCollection(ProjectService.getProjectTasks(props.username,projectId))


  const onDragEnd = (result:any) => {
    // defines what happens at end of drag action
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    console.log(source);
    console.log(destination);

    const start = projectData?.columns[source.droppableId];
    const finish = projectData?.columns[destination.droppableId];

    // moving within single column
    if (start===finish){
      const newTaskIDs = Array.from(start.taskIDs);
      
      
      // remove item from current position
      // then add item to new position
      newTaskIDs.splice(source.index, 1);
      newTaskIDs.splice(destination.index, 0, draggableId);
      
      const newColumn = {
        ...start,
        taskIDs: newTaskIDs
      };
      
      // ProjectService.updateProjectColumn(props.username, projectId, source.droppableId, newColumn);
      return;
    }

    //Moving between columns

    const startTasksIDs = Array.from(start.taskIDs);
    startTasksIDs.splice(source.index,1);
    const newStart = {
      ...start,
      taskIDs: startTasksIDs,
    };

    const finishTaskIDs = Array.from(finish.taskIDs);
    finishTaskIDs.splice(destination.index, 0, draggableId);
    
    const newFinish ={
      ...finish,
      taskIDs: finishTaskIDs,
    };

    // ProjectService.updateColumnsAfterDrop(props.username, projectId, source.droppableId, newStart, destination.droppableId, newFinish);

  };

  // if (projectLoading) {
  //   return (
  //     <> 
  //     <Typography>

  //     "Project Loading..."
  //     </Typography>
  //     </>
  //   )
  // };

  // if (projectError) {
  //   console.log(projectError);
  //   return (
  //     <React.Fragment>
  //       <h2>Something went wrong</h2>
  //       Error: {projectError}
  //     </React.Fragment>
  //   )
  // };

  // if (projectTasksLoading) {
  //   return (
  //     <> 
  //     <Typography>
  
  //     "Tasks Loading..."
  //     </Typography>
  //     </>
  //   )
   
  // };

  // if (projectTasksError) {
  //   console.log(projectTasksError);
  //   return (
  //     <React.Fragment>
  //       <h2>Something went wrong</h2>
  //       Error: {projectTasksError}
  //     </React.Fragment>
  //   )
  // };

  const addNewColumnTitle = 'Create New Column';
  const formNewColumnContent = 'Name of new columm must be Unique';
  const placeholderNewColumn = 'New Column Name'
  const buttonNewColumn = 'Create New Column'

  const handleColumnAdd = ( columnName: string) =>{
    // ProjectService.addNewColumnToProject(props.username, projectId, columnName);
  };


  return (
    <React.Fragment>
      <Grid 
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      >
      <Grid item xs={12} >
        <Paper elevation={0} 
          style={
            {margin:"1em", backgroundColor:"transparent", padding:"1em"}
          }
        >
          <Box  style={{color: "white"}}>
            <Typography variant="h1" >
              {projectId} Project Page
            </Typography>
            <Button onClick={()=>console.log(projectData)}>Console</Button>
          </Box>
        </Paper>
      </Grid>
      <Grid item>
        <FormTextDialog
          submitFunc={handleColumnAdd}
          title={addNewColumnTitle}
          dialogContent={formNewColumnContent}
          placeholder= {placeholderNewColumn}
          submitButtonText = {buttonNewColumn} 
          buttonType ='text'
        />
        <Button onClick={()=>console.log('log')}>
          console project data
        </Button>
      </Grid>
      <Grid item 
        // className={classes.dropArea} 
        xs={12}
      >

        <Paper 
          // className={classes.formPaper}
          elevation={5}
          style={{
            margin:"2em",
            padding:"1em",
            color:"black"
            }}
        >
          <Grid  container >

          
          <OrganizeComms
            onDragEnd={onDragEnd}
            
          >
            <Grid 
              container 
              alignItems="flex-start"
              spacing={2} 
              // className={classes.dropArea}
              direction='row'>
              { projectData?.columnOrder.map((col: any, ind: number)=> (
                <Grid item  key={col}>
                <DroppableColumn
                  taskIDs={projectData.columns[col].taskIDs}
                  tasks={projectTasks}
                  title={projectData.columns[col].title}
                  colId={col} 
                  userId = {props.username}
                  projectId = {projectId}
                  columnOrderArr= {projectData.columnOrder}
                  columns={projectData.columns}
                />
                </Grid>
              ))}
              
            </Grid>
          </OrganizeComms>
          </Grid>
        </Paper>
      </Grid>
        
        
        
      </Grid>


    </React.Fragment>
  )
}