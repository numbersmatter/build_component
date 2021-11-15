// Given an array of project objects,
// display each object as a project card

//import project card
import React from 'react';
import ProjectCard, { ProjectCardProps } from '../ProjectCard';
import { Stack } from '@mui/material';

// create some sample data to refer back to
const sampleData: ProjectCardProps[] = [
  {
    id: '1',
    projectTitle: 'First Project',
    projectStatus: 'active'
  },
  {
    id: '2',
    projectTitle: 'Second Project',
    projectStatus: 'archived'
  },
];


// create an interface to accept the given data
export interface DisplayProjectCardsProps {
  projectArray: ProjectCardProps[],
}


// assign the interface as props
export default function DisplayProjectCards(props: DisplayProjectCardsProps) {
  
  
  return (
    <Stack spacing={2}>
    {/*  for each project object in the array of project objects call function */}
    {
      props.projectArray.map(
       
        // {/* create a function that accepts a project object and returns a project card with those properties */}
        (project)=>(
          <ProjectCard 
            id={project.id}
            projectTitle={project.projectTitle}
            projectStatus={project.projectStatus}
          />
        )
      )
    }
      
    </Stack>
  )
}

