// From  https://mui.com/components/cards/

import React from 'react';

import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Button
 } from '@mui/material';


 // Create interface for 
 export interface ProjectCardProps {
    id: string,
    projectTitle: string,
    projectStatus: 'active' | 'archived'
 }




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