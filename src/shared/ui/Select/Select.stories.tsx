import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta = {
    title: 'shared/Select',
    component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>

export const Primary: Story = {
    args: {
        label: 'Укажите значение',
        options: [
            { value: '123', content: 'Первый пункт' },
            { value: '456', content: 'Второй пункт' },
            { value: '789', content: 'Третий пункт' },
            { value: '999', content: 'Четвёртый пункт' },
        ],
    },
};
