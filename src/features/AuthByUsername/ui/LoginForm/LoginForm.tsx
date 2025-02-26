import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames';
import {
    Button, Input, Text, ThemeButton,
} from '@/shared';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';
import { TextTheme } from '@/shared/ui/Text/Text';

import { loginByUsername } from '../../model/services/loginByUserName/loginByUserName';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string,
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const {
        username, password, error, isLoading,
    } = useAppSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text theme={TextTheme.ERROR} text={t('Вы ввели неверный логин и/или пароль')} />}
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите имя')}
                autoFocus
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cls.loginBtn}
                theme={ThemeButton.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
