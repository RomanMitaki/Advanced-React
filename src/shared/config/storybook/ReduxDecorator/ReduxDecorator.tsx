import { Provider } from 'react-redux';

import { DeepPartial } from '@/app/types/general';
import { createReduxStore, StateSchema } from '@/app/providers/StoreProvider';

export const ReduxDecorator = (initialState: DeepPartial<StateSchema>) => (Story: any) => {
    const store = createReduxStore(initialState as StateSchema);
    return (
        <Provider store={store}>
            <Story />
        </Provider>
    );
};
