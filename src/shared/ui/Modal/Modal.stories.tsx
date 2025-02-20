import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '@/shared';
import { ThemeDecoratorDark } from '@/shared/config/storybook/ThemeDecorator/ThemeDecoratorDark';

const meta = {
    title: 'shared/Modal',
    component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
};
Dark.decorators = [ThemeDecoratorDark];
