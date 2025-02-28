import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';

import { createReducerManager } from './reducerManager';
import { StateSchema } from './StateSchema';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce as (state: StateSchema | undefined, action: any) => StateSchema,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

// Типизация RootState и Dispatch извлечением из store:
export type RootState = ReturnType<ReturnType<typeof createReduxStore>['getState']>;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
