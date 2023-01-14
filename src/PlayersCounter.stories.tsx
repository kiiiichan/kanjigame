import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { PlayersCounter } from './PlayersCounter';

export default {
  title: 'Example/PlayersCounter',
  component: PlayersCounter,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PlayersCounter>;

const Template: ComponentStory<typeof PlayersCounter> = (args) => <PlayersCounter {...args} />;

export const Basic = Template.bind({});




