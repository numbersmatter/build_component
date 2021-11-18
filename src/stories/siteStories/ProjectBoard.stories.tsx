// ProjectBoard.stories.tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProjectBoard from '../../components/ReactDND/ProjectBoard';


// Determine where story goes 

export default {
  title: 'ProjectBoard',
  component: ProjectBoard,

} as ComponentMeta<typeof ProjectBoard>;

//logic for default

// Create Template 

const Template: ComponentStory<typeof ProjectBoard> = (args) => <ProjectBoard {...args} />

export const  Standard = Template.bind({});

Standard.args={
  
}