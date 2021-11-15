import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FilterProjectCards from '../../components/DisplayProjects/FilterProjectCards';
import { ProjectCardProps } from '../../components/ProjectCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Learning/FilterProjectCards',
  component: FilterProjectCards,
  
} as ComponentMeta<typeof FilterProjectCards >;

// sample data
const projectsArray: ProjectCardProps[] = [
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



// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FilterProjectCards> = (args) => <FilterProjectCards {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  projectArray: projectsArray,
  filterValue: {
    'active': true,
    'archived': true,
  }
};