import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecoratorDark } from '@/shared/config/storybook/ThemeDecorator/ThemeDecoratorDark';

import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        children: 'Я кнопка',
    },
};

export const Clear: Story = {
    args: {
        children: 'Я кнопка',
        theme: ThemeButton.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'Я кнопка',
        theme: ThemeButton.OUTLINE,
    },
};

Outline.decorators = [ThemeDecoratorDark];
