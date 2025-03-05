import React from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router';

import { createReduxStore } from '@/app/providers/StoreProvider';
import { DeepPartial } from '@/app/types/general';

import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    children: React.ReactNode,
    initialState?: StateSchema,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
    const navigate = useNavigate();

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        navigate,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
