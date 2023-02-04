import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { DismisButton } from './DismisButton';

export default {
  title: 'Example/DismisButton',
  component: DismisButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof DismisButton>;

const Template: ComponentStory<typeof DismisButton> = (args) => <DismisButton {...args} />;

export const Basic = Template.bind({});


