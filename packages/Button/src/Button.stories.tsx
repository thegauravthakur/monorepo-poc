import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Counter } from './index';

export default {
    title: 'Widgets/Button',
    component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
    <Counter {...args} />
);

export const Default = Template.bind({});

Default.args = {
    decrementButtonLabel: 'decrement',
};
