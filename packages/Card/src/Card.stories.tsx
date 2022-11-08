import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from './index';

export default {
    title: 'Widgets/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
    text: 'default card',
};
