import { DeepPartial } from '@/app/types/general';
import { StateSchema } from '@/app/providers/StoreProvider';

import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
    it('should return username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
                username: 'username',
                password: 'password',
                isLoading: false,
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('username');
    });

    it('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
