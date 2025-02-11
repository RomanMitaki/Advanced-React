import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import { Button, ThemeButton } from '@/shared';

import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string,
}

export const PageError = ({ className = '' }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button theme={ThemeButton.CLEAR} onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </div>
    );
};
