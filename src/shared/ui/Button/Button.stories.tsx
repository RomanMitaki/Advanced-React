import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecoratorDark } from '@/shared/config/storybook/ThemeDecorator/ThemeDecoratorDark';

import { Button, ButtonSize, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};

export const ClearInverted: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR_INVERTED,
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
        size: ButtonSize.L,
    },
};

export const OutlineSizeXL: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
        size: ButtonSize.XL,
    },
};
Outline.decorators = [ThemeDecoratorDark];
OutlineSizeL.decorators = [ThemeDecoratorDark];
OutlineSizeXL.decorators = [ThemeDecoratorDark];

export const BackgroundTheme: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.BACKGROUND,
    },
};

export const BackgroundInverted: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.BACKGROUND_INVERTED,
    },
};

export const Square: Story = {
    args: {
        children: '>',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
    },
};

export const SquareL: Story = {
    args: {
        children: '>',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareXL: Story = {
    args: {
        children: '>',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};

export const Disabled: Story = {
    args: {
        children: '>',
        theme: ThemeButton.OUTLINE,
        size: ButtonSize.L,
        disabled: true,
    },
};
