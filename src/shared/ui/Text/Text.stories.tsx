import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecoratorDark } from '@/shared/config/storybook/ThemeDecorator/ThemeDecoratorDark';

import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>

export const Primary: Story = {
    args: {
        title: 'Это заголовок',
        text: 'Это основной текст',
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Это заголовок',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Это основной текст',
    },
};

export const ErrorPrimary: Story = {
    args: {
        title: 'Это заголовок',
        text: 'Это основной текст',
        theme: TextTheme.ERROR,
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Это заголовок',
        text: 'Это основной текст',
    },
};
PrimaryDark.decorators = [ThemeDecoratorDark];

export const OnlyTitleDark: Story = {
    args: {
        title: 'Это заголовок',
    },
};
OnlyTitleDark.decorators = [ThemeDecoratorDark];

export const OnlyTextDark: Story = {
    args: {
        text: 'Это основной текст',
    },
};
OnlyTextDark.decorators = [ThemeDecoratorDark];

export const ErrorDark: Story = {
    args: {
        title: 'Это заголовок',
        text: 'Это основной текст',
        theme: TextTheme.ERROR,
    },
};
ErrorDark.decorators = [ThemeDecoratorDark];
