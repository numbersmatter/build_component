import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FilterProjectSwitches from '../../components/FilterProjectSwitches';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Learning/FilterProjectSwitches',
  component: FilterProjectSwitches,
  
} as ComponentMeta<typeof FilterProjectSwitches >;

// sample data



// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FilterProjectSwitches> = (args) => <FilterProjectSwitches {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
 
};
