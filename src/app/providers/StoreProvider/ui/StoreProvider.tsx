import React from 'react';
import { Provider } from 'react-redux';

import { createReduxStore } from '@/app/providers/StoreProvider';

import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    children: React.ReactNode,
    initialState?: StateSchema,
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
