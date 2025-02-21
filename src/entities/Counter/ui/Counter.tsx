import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Button, ThemeButton } from '@/shared/ui/Button/Button';

import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation('counter');
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button
                onClick={increment}
                theme={ThemeButton.OUTLINE}
                data-testid="increment-button"
            >
                {t('Увеличить')}
            </Button>
            <Button
                onClick={decrement}
                theme={ThemeButton.OUTLINE}
                data-testid="decrement-button"
            >
                {t('Уменьшить')}
            </Button>
        </div>
    );
};
