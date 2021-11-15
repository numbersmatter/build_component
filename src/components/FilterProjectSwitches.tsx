// given an array of string values,
// create a switch which will control the boolean value of a property with that string value

// import needed components 
import * as React from 'react';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Switch,
} from '@mui/material'




// create some sample data
export type AcceptedValue = 'active' | 'archived' | 'favorited'
 


 export interface IntialState {
   [key:string]: boolean,
 }

//create inteface 
export interface FilterProjectSwitchesProps{
  filterAbleValues: string[],
  filterValue: IntialState,
  handleSwitchChange: (event: React.ChangeEvent<HTMLInputElement>) => void

}

// assign interface to props
export default function FilterProjectSwitches(props: FilterProjectSwitchesProps) {
  
  // hold state filterValue
  const filterValue = props.filterValue;

  const handleChange =props.handleSwitchChange;

  return (
    <>
      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">Choose which forms to display</FormLabel>
        <FormGroup row>
          {/* given an array of string values create switches with the name property of those strings  */}

          {
            props.filterAbleValues.map(
              // create a function that accepts that string value and creates a switch with that name
              (name)=>(
                <FormControlLabel
                control={
                  // create a switch whose position is determined by the property of 'active' on the state object name this switch 'active'
                  <Switch checked={filterValue[name]} onChange={handleChange} name={name} />
                }
                label={name}
              />
              )
            )
          }
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
      {/* display state for debugging */}
      <p>{JSON.stringify(filterValue)}</p>
    </>
  );
}