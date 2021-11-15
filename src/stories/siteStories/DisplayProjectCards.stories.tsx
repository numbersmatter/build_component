import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DisplayProjectCards from '../../components/DisplayProjects/DisplayProjectCards';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Learning/DisplayProjectCards',
  component: DisplayProjectCards,
  
} as ComponentMeta<typeof DisplayProjectCards >;

// sample data
const projectsArray = [
  {
    id: '1',
    projectTitle: 'First Project',
    projectStatus: 'active'
  },
  {
    id: '2',
    projectTitle: 'second project',
    projectStatus: 'archived'
  }
]


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DisplayProjectCards> = (args) => <DisplayProjectCards {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  projectArray: [
    {
      id: '1',
      projectTitle: 'First Project',
      projectStatus: 'active'
    },
    {
      id: '2',
      projectTitle: 'Second Project',
      projectStatus: 'archived'
    },
  ]
};
