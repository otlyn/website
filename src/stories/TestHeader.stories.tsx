import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TestHeader } from './TestHeader';

export default {
  title: 'Example/TestHeader',
  component: TestHeader,
} as ComponentMeta<typeof TestHeader>;

const Template: ComponentStory<typeof TestHeader> = (args) => <TestHeader {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
