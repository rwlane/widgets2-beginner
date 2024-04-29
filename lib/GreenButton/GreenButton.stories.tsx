//
//
import { Meta, StoryObj } from "@storybook/react";
import { GreenButton } from "./GreenButton";

const meta: Meta<typeof GreenButton> = {
  component: GreenButton
};

export default meta;
type Story = StoryObj<typeof GreenButton>;

export const Primary: Story =
{
  args: {
    children: "Click Me!"
  }
};

export const Secondary: Story =
{
  args: {
    children: "Again, Click Me!"
  }
};
