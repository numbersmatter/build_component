
// Given an array of Projects,
// display each with its own Project card

import React from 'react';
import ProjectCard, { ProjectCardProps } from '../components/ProjectCard';


// create a simple example of the given array

const projectArray = [
  {
    id: '1',
    projectTitle: 'First Project',
    projectStatus: 'active'
  },
  {
    id: '2',
    projectTitle: 'Second Project',
    projectStatus: 'inactive'
  }
]

// create and interface to accept what is given
export interface DisplayProjectsProps {
  projectArray: ProjectCardProps[]
}


export default function DisplayProjects(props: DisplayProjectsProps) {
  return (
    <>
    {/* for each project element in the array */}
    {
      props.projectArray.map(

        // display a project card with the project properties from that element
        (project)=>( 
          <ProjectCard 
            id={project.id} 
            projectTitle={project.projectTitle} 
            projectStatus={project.projectStatus}
          />
        )


      )
    }


    </>
  )
}
