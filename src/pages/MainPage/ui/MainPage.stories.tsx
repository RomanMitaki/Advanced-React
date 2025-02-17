import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecoratorDark } from '@/shared/config/storybook/ThemeDecorator/ThemeDecoratorDark';

import MainPage from './MainPage';

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof MainPage>

export const Primary: Story = {
    args: {},
};

export const Secondary: Story = {
    args: {},
};
Secondary.decorators = [ThemeDecoratorDark];
