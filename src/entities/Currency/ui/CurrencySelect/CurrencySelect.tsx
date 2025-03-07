import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames';
import { Select } from '@/shared';
import { Currency } from '@/entities/Currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        value,
        className,
        onChange,
        readonly,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите валюту')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
