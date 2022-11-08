import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Banner } from './index';

export default {
    title: 'Widgets/Banner',
    component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const Default = Template.bind({});

Default.args = {
    text: 'Banner Text',
};
