import { ComponentMeta, ComponentStory } from '@storybook/react';

import Tabs from '../pages/tabs';

export default {
  title: 'Tabs/Tabs',
  component: Tabs,
  argTypes: {
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs />;

export const Default = Template.bind({});
Default.args = {};
