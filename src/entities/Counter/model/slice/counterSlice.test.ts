import { CounterSchema } from '@/entities/Counter';

import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice', () => {
    it('should decrement value', () => {
        const state: CounterSchema = {
            value: 10,
        };

        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });

    it('should increment value', () => {
        const state: CounterSchema = {
            value: 10,
        };

        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });

    it('should work with empty state', () => {
        const state = undefined;

        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 1 });
    });
});
