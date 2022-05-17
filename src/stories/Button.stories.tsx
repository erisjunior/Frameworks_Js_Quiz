import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/button';

export default {
  title: 'Tabs/Button',
  component: Button,
  argTypes: {
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Texto do Botão</Button>;

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Focused = Template.bind({});
Focused.args = {
  focused: true,
};
