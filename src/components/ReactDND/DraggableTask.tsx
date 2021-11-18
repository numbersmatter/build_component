import React from 'react';
import TaskCard from './TaskCard';
import { Draggable } from 'react-beautiful-dnd';
import { TaskProps } from './intial-data';

export interface DraggableTaskProps {
  draggableId: string,
  index: number,
  task: TaskProps
}

export default function DraggableTask(props: DraggableTaskProps) {
  return (
    <Draggable draggableId={props.draggableId} index={props.index}>
      {
        (provided) =>
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TaskCard
            title={props.task.id}
            content={props.task.content}
          />
        </div> 

      
      }


      
    </Draggable>
  )
}
