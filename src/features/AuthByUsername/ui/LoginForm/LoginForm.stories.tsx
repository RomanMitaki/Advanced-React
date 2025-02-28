import type { Meta, StoryObj } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';

import { ReduxDecorator } from '@/shared/config/storybook/ReduxDecorator/ReduxDecorator';
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { StateSchema } from '@/app/providers/StoreProvider';

import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>

export const Primary: Story = {};

export const WithError: Story = {

};
WithError.decorators = [
    ReduxDecorator({
        loginForm: {
            username: 'Roman', password: '123', isLoading: false, error: 'Error',
        },
    }, {
        loginForm: loginReducer,
    } as ReducersMapObject<StateSchema>),
];

export const Loading: Story = {

};
Loading.decorators = [
    ReduxDecorator({
        loginForm: {
            username: 'Roman', password: '123', isLoading: true,
        },
    }, {
        loginForm: loginReducer,
    } as ReducersMapObject<StateSchema>),
];
