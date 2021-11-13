// Given an array of Projects,
// display each with its own project card


import React from 'react';
import {
  Stack
} from '@mui/material'
import ProjectCard, { ProjectCardProps } from '../ProjectCard';


// create some sample data 
 const projectsArray = [
   {
     id: '1',
     projectTitle: 'First Project',
     projectStatus: 'active'
   },
   {
     id: '2',
     projectTitle: 'second project',
     projectStatus: 'archived'
   }
 ]


// create an interface to accept the given data 
export interface DisplayProjectCardsProps {
  projectArray: ProjectCardProps[],
}



export default function DisplayProjectCards(props: DisplayProjectCardsProps) {
  return (
    <Stack spacing={2}>
    {/*  for each project element in the array of projects  */}
    {
      props.projectArray.map(
        //  display a project card with the project properties from that project 

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
