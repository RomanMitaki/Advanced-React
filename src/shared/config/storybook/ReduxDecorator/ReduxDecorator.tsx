import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';

import { DeepPartial } from '@/app/types/general';
import { createReduxStore, StateSchema } from '@/app/providers/StoreProvider';

export const ReduxDecorator = (
    initialState?: DeepPartial<StateSchema>,
    asyncReducers?: ReducersMapObject<StateSchema>,
) => (Story: any) => {
    const store = createReduxStore(initialState as StateSchema, asyncReducers);
    return (
        <Provider store={store}>
            <Story />
        </Provider>
    );
};
