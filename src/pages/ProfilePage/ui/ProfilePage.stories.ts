import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecoratorDark } from '@/shared/config/storybook/ThemeDecorator/ThemeDecoratorDark';

import ProfilePage from './ProfilePage';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof ProfilePage>

export const Primary: Story = {
    args: {},
};

export const Secondary: Story = {
    args: {},
};
Secondary.decorators = [ThemeDecoratorDark];
