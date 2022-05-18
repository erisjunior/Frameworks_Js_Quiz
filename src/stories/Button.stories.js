import Button from '../components/Button.svelte';

export default {
  title: 'Tabs/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'onClick' },
    disabled: { control: 'boolean' },
    focused: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: Button,
  props: args,
  on: {
    click: args.onClick,
  },
});

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
