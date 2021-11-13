import React from 'react';

interface PlaceHolderProps{
  /**
   * What is the text name of the placeholder
   */
  name: string,
  /**
   * what is the content
   */
  content: string
}
/**
 * 
 * Primary Placeholder component
 */


export default function PlaceHolder(props: PlaceHolderProps) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.content}</p>
      
    </div>
  )
}
