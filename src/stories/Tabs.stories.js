import Tabs from '../pages/Tabs.vue';

export default {
  title: 'Tabs/Tabs',
  component: Tabs,
  argTypes: {
  },
};

const Template = (args) => ({
  components: { Tabs },
  setup() {
    return { args };
  },
  template: '<Tabs v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
};

export const CustomValues = Template.bind({});
CustomValues.args = {
  tabs: [
    {
      title: 'Title Alternativo 1',
      text: 'Text Alternativo 1'
    },
    {
      title: 'Title Alternativo 2',
      text: 'Text Alternativo 2'
    },
    {
      title: 'Title Alternativo 3',
      text: 'Text Alternativo 3'
    },
  ]
};
