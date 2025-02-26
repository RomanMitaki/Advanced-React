import type { Meta, StoryObj } from '@storybook/react';

import { ReduxDecorator } from '@/shared/config/storybook/ReduxDecorator/ReduxDecorator';

import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof LoginForm>

export const Primary: Story = {};

export const WithError: Story = {

};
WithError.decorators = [
    ReduxDecorator({ loginForm: { username: 'Roman', password: '123', error: 'Ошибка' } }),
];

export const Loading: Story = {

};
Loading.decorators = [
    ReduxDecorator({ loginForm: { username: 'Roman', password: '123', isLoading: true } }),
];
