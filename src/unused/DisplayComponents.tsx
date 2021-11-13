import React from 'react';

export interface FCProps{
  [key: string]: any
}


export interface DisplayFCsProps<
  FCProps extends { [key: string]: unknown }
> {
  itemArray: FCProps[],
  functionalComp: React.FC<FCProps>
}

export default function DisplayComponents<
  Props extends { [key: string]: unknown }
>(props : DisplayFCsProps<Props>) {

  const FunctionalComp = props.functionalComp
  return (
    <div>
      {
        props.itemArray.map(

          (item)=>(<FunctionalComp { ...item}/>)
        )

      }
      
    </div>
  )
}
