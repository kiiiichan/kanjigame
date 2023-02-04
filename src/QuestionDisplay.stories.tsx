import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { QuestionDisplay } from './QuestionDisplay';

export default {
  title: 'Example/QuestionDisplay',
  component: QuestionDisplay,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof QuestionDisplay>;

const Template: ComponentStory<typeof QuestionDisplay> = (args) => <QuestionDisplay {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  question: "ヒンシュ改良"
};
