import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';

import { classNames } from '@/shared/lib/classNames';
import { Button, ThemeButton } from '@/shared';

interface LangSwitcherProps {
    className?: string,
    short?: boolean
}

export const LangSwitcher = memo(({ className = '', short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation('langswitcher');

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.BACKGROUND_INVERTED}
            onClick={toggle}
        >
            {t(short ? 'Короткая версия' : 'Язык')}
        </Button>
    );
});
