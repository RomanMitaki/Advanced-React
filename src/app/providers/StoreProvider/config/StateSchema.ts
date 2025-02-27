import { EnhancedStore, ReducersMapObject } from '@reduxjs/toolkit';
import { AnyAction, Reducer } from 'redux';

import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUsername';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    // асинхронные редьюсеры
    loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => StateSchema,
    add: (key: StateSchemaKey, reducer: Reducer) => void,
    remove: (key: StateSchemaKey) => void,
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager;
}
