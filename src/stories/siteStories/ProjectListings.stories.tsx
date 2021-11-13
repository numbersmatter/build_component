// ProjectsListing.stories.tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProjectsListing from '../../components/ProjectsListing';


// Determine where story goes 

export default {
  title: 'ProjectsListing',
  component: ProjectsListing,

} as ComponentMeta<typeof ProjectsListing>;

//logic for default


// Create Template 

const Template: ComponentStory<typeof ProjectsListing> = (args) => <ProjectsListing {...args} />

export const Standard = Template.bind({});

Standard.args={
  projectArray:[
    {
      id: '1',
      projectTitle: 'First Project',
      projectStatus: 'active'
    },
    {
      id: '2',
      projectTitle: 'second project',
      projectStatus: 'archived'
    },
    {
      id: '3',
      projectTitle: 'Third project',
      projectStatus: 'archived'
    },
    {
      id: '4',
      projectTitle: 'Fourth project',
      projectStatus: 'active'
    }
  ]

}