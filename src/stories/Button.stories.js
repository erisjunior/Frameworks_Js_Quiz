import Button from '../components/Button.vue';

export default {
  title: 'Tabs/Button',
  component: Button,
  argTypes: {
    onClick: {},
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">Texto do Botão</Button>',
});

export const Default = Template.bind({});
Default.args = {
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Focused = Template.bind({});
Focused.args = {
  focused: true,
};
