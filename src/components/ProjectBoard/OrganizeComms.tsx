import React from 'react';

import { DragDropContext } from 'react-beautiful-dnd';

import {
  Paper,
} from '@mui/material';




// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     minHeight: 340,
//     width: 300,
//     padding: 10,
//     textAlign: "center",
//     margin: 0,

//   },
//   control: {
//     padding: theme.spacing(2),
//   },
//   paperContainer: {
//     margin: 0,
//     padding: 10,
//     width:'100%',
   
//   },
// }));

interface OrganizeCommsProps {
  onDragEnd: (result:any) =>void,
  children: React.ReactNode
}


export default function OrganizeComms(props: OrganizeCommsProps) {
  // const classes = useStyles();
  

  return (
    
      <Paper 
        // className={classes.paperContainer} 
        elevation={6}
      >
        <DragDropContext onDragEnd={props.onDragEnd}>
          {props.children}
        </DragDropContext>
      </Paper>
   

  )
}