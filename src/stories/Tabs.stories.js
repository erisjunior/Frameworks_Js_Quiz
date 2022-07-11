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
