// Hold the components of the Drag and drop board

import React from 'react';
import initialData from './intial-data';
import Column from './Column';
import { 
  DragDropContext, 
  DropResult, 
  ResponderProvided 
} from 'react-beautiful-dnd';

// create an interface to let the component know what to expect
export interface ProjectBoardProps {

}



export default function ProjectBoard(props: ProjectBoardProps) {

  // create some state
  const state= initialData


  // tell computer how to handle DragEnd
  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {

  }

  
  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    
    >
      {/*  for each column in the columnOrder */}
      {
        initialData.columnOrder.map(
          // given the columnId create the variables needed to return a column component with tasks
          (columnId)=>{
            const column = state.columns[columnId];
            const tasks = column.taskIds.map((taskId)=> state.tasks[taskId])


            return (
              <Column 
                key={column.id}
                tasks={tasks}
                column={column}
              />
            )
            
          }
        )
      }
      
      
    </DragDropContext>
  )
}
