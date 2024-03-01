import type { Meta, StoryObj } from "@storybook/react";

import { tblinput, FilteredTableComponent } from "./FilteredTableComponent";

const meta = {
  title: "AAAAAAAAAAAAAAAAAAA/FilteredTableComponent",
  component: FilteredTableComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof FilteredTableComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const tbldadta: tblinput = {
  tbltitle: ["Title 1", "Title 2", "Title 3"],
  tbldata: [
    ["Data 1", "Data 2", "Data 3"],
    ["Data 4", "Data 5", "Data 6"],
    ["Data 7", "Data 8", "Data 9"],
  ],
  filtersw: [true, true, true],
  height: 250,
};

export const LoggedIn: Story = {
  args: {
    input: tbldadta,
  },
};
