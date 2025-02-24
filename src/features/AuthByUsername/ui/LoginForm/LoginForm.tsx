import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import { Button, Input, ThemeButton } from '@/shared';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string,
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите имя')}
                autoFocus
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите пароль')}
            />
            <Button
                className={cls.loginBtn}
                theme={ThemeButton.OUTLINE}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
