import React, { FC, useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from 'redux';

import { ReduxStoreWithManager, useAppDispatch } from '@/app/providers/StoreProvider';
import { StateSchemaKey } from '@/app/providers/StoreProvider/config/StateSchema';

export type ReducersList = Partial<{
    [ name in StateSchemaKey ]: Reducer
}>

interface DynamicModuleLoaderProps {
    children: React.ReactNode;
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount,
    } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({ type: 'init reducer' });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: 'destroy reducer' });
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return children as React.ReactElement;
};
