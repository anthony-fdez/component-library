import React from "react";
import { ComponentStory } from "@storybook/react";

import Spinner from "./Spinner";
import ThemeProvider from "../../Theming/ThemeProvider";

export default {
  title: "Components/Feedback/Spinner",
  component: Spinner,
};

const Template: ComponentStory<typeof Spinner> = (args) => (
  <ThemeProvider>
    <Spinner {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
export const Circular = Template.bind({});
export const Dots = Template.bind({});

Circular.args = {
  variant: "circular",
  size: 20,
};

Dots.args = {
  variant: "dots",
};
