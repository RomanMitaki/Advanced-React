import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecoratorDark } from '@/shared/config/storybook/ThemeDecorator/ThemeDecoratorDark';
import { Navbar } from '@/widgets/Navbar';
import { ReduxDecorator } from '@/shared/config/storybook/ReduxDecorator/ReduxDecorator';

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof Navbar>

export const Light: Story = {
    args: {},
};

export const WithAuth: Story = {
    args: {},
};
WithAuth.decorators = [ReduxDecorator({ user: { authData: { id: '1', username: 'Roman' } } })];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecoratorDark];
