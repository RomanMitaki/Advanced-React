import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import { useAppSelector } from '@/app/providers/StoreProvider';
import { getProfileData } from '@/entities/Profile/model/selectors/getProfileData/getProfileData';
import {
    Button, Input, Text, ThemeButton,
} from '@/shared';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string,
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profilePage');
    const data = useAppSelector(getProfileData);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль пользователя')} />
                <Button
                    className={cls.editBtn}
                    theme={ThemeButton.OUTLINE}
                >
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
