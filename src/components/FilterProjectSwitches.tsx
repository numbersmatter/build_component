// create a switch for showing 'active',
// create a switch for showing 'archived'


import * as React from 'react';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Switch,
} from '@mui/material'

// create an interface
export interface FilterProjectSwitchesProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>)=>void,
  filterValues: {
    [key:string]: boolean
  }

}


export default function FilterProjectSwitches(props: FilterProjectSwitchesProps) {

  const handleChange= props.handleChange;
  const state = props.filterValues;

  return (
    <>
      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">Select the Projects you would like to see</FormLabel>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch checked={state.active} onChange={handleChange} name="active" />
            }
            label="active"
          />
          <FormControlLabel
            control={
              <Switch checked={state.archived} onChange={handleChange} name="archived" />
            }
            label="archived"
          />
          
        </FormGroup>
        <FormHelperText></FormHelperText>
      </FormControl>
      {/* // add some debugging text */}
      <p>{JSON.stringify(state)}</p>
    </>
  );
}