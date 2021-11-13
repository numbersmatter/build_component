// Given a projects array with a field called projectStatus,
// in which this field can be either 'active" or "archived",
// and a given an object with each possible value as a named property,
// with the value of that property being true or false
// display only the projects that match true values for their projectStatus


import React from 'react';
import DisplayProjectCards, { DisplayProjectCardsProps } from './DisplayProjectCards';

// pass project array
// create  interface to tell the component what to expect

export interface FilterProjectCardsProps extends DisplayProjectCardsProps {
  filterValues: {
    'active': boolean,
    'archived': boolean, 
  }
};



export default function FilterProjectCards(props: FilterProjectCardsProps) {
  const filterValues = props.filterValues

  // filter on the data by value(s)
  const filteredProjects = props.projectArray.filter(
    // create a function that returns either true or false for a given project in the project array
    (project)=>(filterValues[project.projectStatus])

  )

  return (
    // display the project cards from the filtered values
    <>
      <DisplayProjectCards
        projectArray={filteredProjects} 
      />
      
    </>
  )
}
