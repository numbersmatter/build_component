import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { Draggable } from 'react-beautiful-dnd';
import {
  Card,
  CardActions,
  CardContent,
  Typography
} from '@mui/material';


// const useStyles = makeStyles({
//   card: {
//     minWidth: 275,
//   },
//   cardDragging: {
//     minWidth:275,
//     backgroundColor: 'lightgreen',
//   },
//   title: {
//     fontSize: 18,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

export interface CommCardProps {
  id: string,
  index: number,
  taskDetails: any,
  projectId: string
}


export default function CommCard(props: CommCardProps) {
  const classes = useStyles();
  const draggableId = props.id;
  const index = props.index;
 

  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided, snapshot) => (

        <Card 
          className={
            !snapshot.isDragging 
            ? classes.card 
            : classes.cardDragging} 
          variant="outlined" 
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          innerRef={provided.innerRef}
        >
        <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {props.taskDetails.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        task
        </Typography>
        </CardContent>
        <CardActions>
          
        </CardActions>
        </Card>
      )}
    </Draggable>
  );

}