// Components which need state have to have a holder component
//  to pass that state down to the component


import React from 'react';
import FilterProjectSwitches, { FilterProjectSwitchesProps } from '../../components/FilterProjectSwitches';

// create interface
interface IntialState {
  [key: string]: boolean,
}
export interface FilterSwitchHolderProps {
  filterValues: IntialState,
  filterAbleValues: string[],
  
}



export default function FilterSwitchHolder(props: FilterProjectSwitchesProps) {
  // create state
  const [filterValue, setFilterValue]= React.useState<IntialState>(
    props.filterValue
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
      <FilterProjectSwitches
        filterAbleValues={props.filterAbleValues}
        filterValue={filterValue}
        handleSwitchChange={handleChange}
      />
    </div>
  )
}
