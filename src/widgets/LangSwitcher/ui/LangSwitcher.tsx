import { useTranslation } from 'react-i18next';
import React from 'react';

import { classNames } from '@/shared/lib/classNames';
import { Button, ThemeButton } from '@/shared';

interface LangSwitcherProps {
    className?: string,
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleLanguage}
        >
            {t('Язык')}
        </Button>

    );
};
