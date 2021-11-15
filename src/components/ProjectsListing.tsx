// given an array of project objects,
// and given an array of filter state objects,
// allow user to set toggle switches that,
// control which projects are shown

import React from 'react';
import FilterProjectSwitches, {AcceptedValue} from './FilterProjectSwitches';
import FilterProjectCards from './DisplayProjects/FilterProjectCards';
import { ProjectCardProps } from './ProjectCard';


// create interface so component knows what to expect


export interface FilterStateObject{
  name: string,
  intialValue: boolean
}

export interface IntialState {
  [key:string]: boolean,
}
export interface ProjectsListingProps {
  projectArray: ProjectCardProps[],
  filterStateArray: FilterStateObject[],
};

// create some sample data 
const filterStateArraySample: FilterStateObject[]= [
  {
    name: 'active',
    intialValue: true,
  },
  {
    name: 'archived',
    intialValue: true,
  },
]



// assign interface as props
export default function ProjectsListing(props: ProjectsListingProps) {

  //create a function that can create the array of filterableValues
  const createFilterableValues= (filterStateArray: FilterStateObject[])=>{
    // create temp array
    let tempArray: string[]= [];

    filterStateArray.map( 
      (stateObject, index)=>(
        tempArray[index]= stateObject.name
      )
    )
    return tempArray
  };
  
  
  //create a function that can create the intial filterState from the filterStateArray

  const createIntialState= (filterStateArray: FilterStateObject[]) =>{
    // create place to store tempObj
    let tempObj: IntialState ={}

    // for each object in the filterStateArray
    filterStateArray.map(
      (stateObject)=>(
        // set a property in the tempObj with name of stateObject's name and
        // with the value of the intialValue of the stateObject
        tempObj[stateObject.name]= stateObject.intialValue
      )
    )

    return tempObj
  }


  const filterAbleValues = createFilterableValues( props.filterStateArray);

  const intialState = createIntialState(props.filterStateArray)

  //this component needs to hold values that will be used by both components below
  // create some state which will be modified by the switches
  const [filterValue, setFilterValue] = React.useState(
    // set the inital value of the state
    intialState
    
  );

  // define how changes to the switch position should be handled
  // create some place to store the function
  const handleChange = 
  
  // given an event of type React ChangeEvent 
  (event: React.ChangeEvent<HTMLInputElement>) => {
    // set the new value of state to the following object
    setFilterValue({
      // copy all of the previous values of state into new object
      ...filterValue,
      // find the property in the state object with the same name as the value of the event target name property
      // set the value of that property to the value from the event target checked property
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div>
      {/* display the switchs */}
      <FilterProjectSwitches
        filterValue={filterValue}
        handleSwitchChange={handleChange} 
        filterAbleValues={filterAbleValues}
      />


      {/* display the filtered project cards */}
      <FilterProjectCards
        projectArray={props.projectArray}
        filterValue={filterValue}
      />
    </div>
  )
}

