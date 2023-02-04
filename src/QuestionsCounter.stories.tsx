import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { QuestionsCounter } from './QuestionsCounter';

export default {
  title: 'Example/QuestionsCounter',
  component: QuestionsCounter,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof QuestionsCounter>;

const Template: ComponentStory<typeof QuestionsCounter> = (args) => <QuestionsCounter {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  totalQuestions: 10,
  progress: 5
};

