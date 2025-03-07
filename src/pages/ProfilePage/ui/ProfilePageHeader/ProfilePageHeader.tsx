import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames';
import { Button, Text, ThemeButton } from '@/shared';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';
import { getProfileReadonly, profileActions, updateProfileData } from '@/entities/Profile';

import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string,
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profilePage');
    const readOnly = useAppSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль пользователя')} />
            {readOnly
                ? (
                    <Button
                        className={cls.editBtn}
                        theme={ThemeButton.OUTLINE}
                        onClick={onEdit}
                    >
                        {t('Редактировать')}
                    </Button>
                )
                : (
                    <div className={cls.btn_wrapper}>
                        <Button
                            className={cls.editBtn}
                            theme={ThemeButton.OUTLINE_RED}
                            onClick={onCancelEdit}
                        >
                            {t('Отменить')}
                        </Button>
                        <Button
                            className={cls.saveBtn}
                            theme={ThemeButton.OUTLINE}
                            onClick={onSave}
                        >
                            {t('Сохранить')}
                        </Button>
                    </div>

                )}

        </div>
    );
};
