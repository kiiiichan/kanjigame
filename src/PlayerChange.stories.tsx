import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { PlayerChange } from "./PlayerChange";

export default {
  title: "Example/PlayerChange",
  component: PlayerChange,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof PlayerChange>;

const Template: ComponentStory<typeof PlayerChange> = (args) => (
  <PlayerChange {...args} />
);

export const Basic = Template.bind({});
