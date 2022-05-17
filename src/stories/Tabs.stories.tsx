import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tabs from '../pages/tabs';

export default {
  title: 'Tabs/Tabs',
  component: Tabs,
  argTypes: {
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const CustomValues = Template.bind({});
CustomValues.args = {
  tabs: [
    {
      id: 1,
      title: 'Title Alternativo 1',
      text: 'Text Alternativo 1'
    },
    {
      id: 2,
      title: 'Title Alternativo 2',
      text: 'Text Alternativo 2'
    },
    {
      id: 3,
      title: 'Title Alternativo 3',
      text: 'Text Alternativo 3'
    },
  ]
};
