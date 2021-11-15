// Given an array of project objects with a field called projectStatus,
// in which that field can be any string value of an array,
// and given a filter value object with property names for each value in that array,
// and which the value of that property is either true or false,
// display only the project objects that have a project status values which are true in the filter value object

// import DisplayProjectCards
import React from 'react'
import DisplayProjectCards, { DisplayProjectCardsProps } from './DisplayProjectCards'



// create an interface to let the component know what to expect
export interface FilterProjectCardsProps extends DisplayProjectCardsProps {
  filterValue: {
    [key: string]: boolean
  }
};


// assign interface to props
export default function FilterProjectCards(props: FilterProjectCardsProps) {

  // create a place to store filter value
  const filterValue = props.filterValue

  // create a place to store the filtered project objects
  const filteredProjectsArray = 
  
  // for each project object in the array of project objects filter by filter value
  props.projectArray.filter(

    // create a function that accepts project object returns true to keep an object and false to reject the object
    (project)=>( filterValue[project.projectStatus])
  )


  return (
    <div>
      {/* display the kept project objects as project cards */}
      <DisplayProjectCards
        projectArray={filteredProjectsArray}
      />
    </div>
  )
}
