import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProjectCard from '../../components/ProjectCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Learning/ProjectCard',
  component: ProjectCard,
  
} as ComponentMeta<typeof ProjectCard >;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProjectCard> = (args) => <ProjectCard {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  projectStatus: 'active',
  projectTitle: 'First Project'
};
