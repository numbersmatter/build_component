import React from 'react';

import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Button
 } from '@mui/material';
// import GroupedButton from '../Buttons/GroupedButton';

 export interface ProjectCardProps {
   projectTitle: string,
   projectStatus: string
 }

 const requestButton= ['Active', 'Archive', 'Hold']


export default function ProjectCard(props: ProjectCardProps) {



  return (
    <Card
      sx={{
        backgroundColor: '#e2e2e2',
        minWidth: '350px',
        maxWidth: '650px',
        borderStyle: 'outset'
      }}
    >
      <CardHeader
        title={props.projectTitle}
        subheader={props.projectStatus} 
        action={
          <Button>Action  </Button>
        }
      />
      <CardContent>
      
      </CardContent>
      <CardActions>
       <Button variant='outlined'>Go to Project </Button>
      </CardActions>
      
    </Card>
  )
}