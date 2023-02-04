import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { CorrectButton } from './CorrectButton';

export default {
  title: 'Example/CorrectButton',
  component: CorrectButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CorrectButton>;

const Template: ComponentStory<typeof CorrectButton> = (args) => <CorrectButton {...args} />;

export const Basic = Template.bind({});


