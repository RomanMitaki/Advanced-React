import type { Preview } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';

import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecoratorLight } from '@/shared/config/storybook/ThemeDecorator/ThemeDecoratorLight';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { ReduxDecorator } from '@/shared/config/storybook/ReduxDecorator/ReduxDecorator';
import { DeepPartial } from '@/app/types/general';
import { StateSchema } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from '@/entities/Profile';

const initialState: DeepPartial<StateSchema> = { counter: { value: 10 } };
const asyncReducers = {
    loginForm: loginReducer,
    profile: profileReducer,
} as ReducersMapObject<StateSchema>;

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        StyleDecorator,
        ThemeDecoratorLight,
        RouterDecorator,
        ReduxDecorator(initialState, asyncReducers),
    ],
};

export default preview;
