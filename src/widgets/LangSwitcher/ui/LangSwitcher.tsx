import { classNames } from '@/shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ThemeButton } from '@/shared';
import cls from './LangSwitcher.module.scss';

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
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleLanguage}
        >
            {t('Язык')}
        </Button>

    );
};
