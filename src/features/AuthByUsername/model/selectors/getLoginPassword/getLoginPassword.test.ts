import { DeepPartial } from '@/app/types/general';
import { StateSchema } from '@/app/providers/StoreProvider';

import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    it('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
                username: 'username',
                password: 'password',
                isLoading: false,
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('password');
    });

    it('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
