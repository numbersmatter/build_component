// create interface
export interface stateObject {
  name: string,
  intialValue: boolean
}

// some sample data
const sampleData: stateObject[] = [
  {
    name: 'active',
    intialValue: true,
  },
  {
    name: 'archived',
    intialValue: false,
  }
];

export interface IntialState {
  [key:string]: boolean
}


const createIntialState = (statesArray: stateObject[])=> {
  // store temp obj
  const tempObj: IntialState= {}

  // for every object in statesArray
  statesArray.map((stateObj)=>{
    tempObj[stateObj.name] = stateObj.intialValue
  })


}