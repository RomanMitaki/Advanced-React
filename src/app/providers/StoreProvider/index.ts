import { createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';
import type {
    StateSchema, ReduxStoreWithManager, ThunkExtraArgs, ThunkConfig,
} from './config/StateSchema';
import { useAppDispatch, useAppSelector } from './config/hooks';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    useAppSelector,
    useAppDispatch,
    ReduxStoreWithManager,
    ThunkExtraArgs,
    ThunkConfig,
};
