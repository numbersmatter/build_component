import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FilterProjectSwitches from '../../components/FilterProjectSwitches';
import FilterSwitchHolder from './FilterSwitchHolder';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Learning/FilterProjectSwitches',
  component: FilterSwitchHolder,
  
} as ComponentMeta<typeof FilterSwitchHolder >;

// sample data



// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FilterSwitchHolder> = (args) => <FilterSwitchHolder {...args} />;

const intialState = {
  active: true,
  archived:true,
}


export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  filterValue: intialState,
  filterAbleValues: ['active', 'archived'],
};
