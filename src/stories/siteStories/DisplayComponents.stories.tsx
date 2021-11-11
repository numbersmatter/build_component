import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PlaceHolder from '../../components/PlaceHolder';
import DisplayComponents from '../../components/DisplayComponents';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Learning/DisplayComponents',
  component: DisplayComponents,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   name: {
  //     name: 'name',
  //     type: {name: 'string', required: false},
  //     defaultValue: 'Hello',
  //   description: 'demo description',
  //   table: {
  //     type: { summary: 'string' },
  //     defaultValue: { summary: 'Hello' },
  //   },
  //   control: {
  //     type: 'text'
  //   }
  //   },
  //   content: {
  //     name: 'content',
  //     type: {name: 'string', required: false},
  //     defaultValue: 'Some Content',
  //   description: 'demo of content',
  //   table: {
  //     type: { summary: 'string' },
  //     defaultValue: { summary: 'Hello' },
  //   },
  //   control: {
  //     type: 'text'
  //   }
  //   },
  // },
} as ComponentMeta<typeof DisplayComponents>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DisplayComponents> = (args) => <DisplayComponents {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  // functionalComp: PlaceHolder,
  // itemArray: [
  //   {
  //     name: "First One",
  //     content: "Some Content",
  //   },
  //   {
  //     name: "Second One",
  //     content: "Some Content",
  //   }
  // ]
};

