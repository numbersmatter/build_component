import React from 'react';
import PlaceHolder from './PlaceHolder';
import DisplayComponents, { DisplayFCsProps, FCProps} from './DisplayComponents';





export interface TestCompProps{
  itemArray: FCProps[],

}

export default function TestComp(props: TestCompProps) {
  const placeHolderArray = [
    {
      name: "First One",
      content: "Some Content",
    },
    {
      name: "Second One",
      content: "Some Content",
    }
  ];


  return (
    <div>
      <DisplayComponents
        functionalComp={PlaceHolder}
        itemArray= {placeHolderArray}
      />
    </div>
  )
}
