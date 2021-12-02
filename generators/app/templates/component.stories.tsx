import <%= componentName %> from '../<%= componentName %>';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: '<%= componentName %>',
  component: <%= componentName %>,
} as ComponentMeta<typeof <%= componentName %>>;

// TODO: Delete this line after replacing `any` with the proper type for `args`
const Template: ComponentStory<typeof <%= componentName %>> = (args: any) => {
  return <<%= componentName %> {...args} />
}

export const Default = Template.bind({});
Default.args = { /* args go here */ };
