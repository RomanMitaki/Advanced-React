import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecoratorDark } from '@/shared/config/storybook/ThemeDecorator/ThemeDecoratorDark';
import { NotFoundPage } from '@/pages/NotFoundPage';

const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof NotFoundPage>

export const Primary: Story = {
    args: {},
};

export const Secondary: Story = {
    args: {},
};
Secondary.decorators = [ThemeDecoratorDark];
