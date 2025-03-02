import { DeepPartial } from '@/app/types/general';
import { StateSchema } from '@/app/providers/StoreProvider';

import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
    const baseState: DeepPartial<StateSchema> = {
        loginForm: {
            error: 'error',
            username: 'username',
            password: 'password',
            isLoading: false,
        },
    };

    it('should return false', () => {
        expect(getLoginIsLoading(baseState as StateSchema)).toEqual(false);
    });

    it('should return true', () => {
        const state = {
            ...baseState,
            loginForm: {
                ...baseState.loginForm,
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });

    it('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
