// Display a column which will hold tasks

import React from 'react';
import TaskCard from './TaskCard'
import { TaskProps } from './intial-data';
import {Droppable} from 'react-beautiful-dnd'
import { ColumnsData } from './intial-data';

import {
  Paper,
  Stack,
} from '@mui/material'
import DraggableTask from './DraggableTask';

// const Container = styled.div`
//   margin: 8px;
//   border: 1px solid lightgrey;
//   border-radius: 2px
// `;
// const Title = styled.h3`
//   padding: 8px;
// `;
// const TaskList = styled.div`
//   padding: 8px;
// `;

export interface ColumnProps {
  tasks: TaskProps[],
  column: ColumnsData,
}


export default function Column(props: ColumnProps) {
  return (
    <Paper
    sx={{
      backgroundColor: '#e2e2e2',
      margin: '8px',
      border: '1px solid lightgrey',
      borderRadius: '2px',
    }}
    >
      <h4>column name</h4>
      <Paper
        sx={{
          padding: '8px',
          backgroundColor: '#e2e2ff'
        }}
      >
        <Droppable droppableId={props.column.id}>
          {
            (provided, snapshot)=>(

            

            <Stack spacing={2}
            // important that ref is what causes this not to break and is different in update
              ref={provided.innerRef}
              {...provided.droppableProps}
              >

              {
                // for each task in the array of tasks
                props.tasks.map(
                  // return a task card
                  (task, index)=>(
                    <DraggableTask
                    task={task}
                    index={index}
                    draggableId={task.id}
                    />
                    )
                    
                    )
                  }
              {provided.placeholder}
            </Stack>
            
                  )
          }
        </Droppable>


      </Paper>
      
    </Paper>
  )
}
