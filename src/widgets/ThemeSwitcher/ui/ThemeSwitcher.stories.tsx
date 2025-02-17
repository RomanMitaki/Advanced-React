import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecoratorDark } from '@/shared/config/storybook/ThemeDecorator/ThemeDecoratorDark';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';

const meta = {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>

export const Primary: Story = {
    args: {},
};

export const Secondary: Story = {
    args: {},
};
Secondary.decorators = [ThemeDecoratorDark];
