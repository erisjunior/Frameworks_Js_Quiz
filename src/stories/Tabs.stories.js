import Tabs from '../pages/Tabs.svelte';

export default {
  title: 'Tabs/Tabs',
  component: Tabs,
  argTypes: {
  },
};

const Template = (args) => ({
  Component: Tabs,
  props: args,
  on: {
    click: args.onClick,
  },
});

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
