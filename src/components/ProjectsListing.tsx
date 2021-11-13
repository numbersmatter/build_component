// Allow the user to filter projects 
// using the UI switches
// Display those project cards


import React from 'react';
import FilterProjectCards from './DisplayProjects/FilterProjectCards';
import FilterProjectSwitches from './FilterProjectSwitches';
import  {ProjectCardProps} from './ProjectCard';


// create the interface
export interface ProjectsListingProps {
  projectArray: ProjectCardProps[] 

}


export default function ProjectsListing(props: ProjectsListingProps) {
  
  // create some state to hold the true false values for needed properties
  const [state, setState] = React.useState({
    active: true,
    archived: false,

  });

  // receive projects array
  const projectsArray= props.projectArray


  // tell computer how to handle a change in the position of the switch
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // set the value of the state to:
    setState({
      // first make a copy of all of the values of state and place them in this object
      ...state,
      // find the property value that was called the same name as the event targets name 
      // set that properties value equal to the value of event target checked property
      [event.target.name]: event.target.checked,
    });
  };
  
  
  return (
    <>
    <FilterProjectSwitches
      handleChange= {handleChange}
      filterValues={state} 
    />
    <FilterProjectCards
      projectArray={projectsArray}
      filterValues={state} 
    />
      
    </>
  )
}
