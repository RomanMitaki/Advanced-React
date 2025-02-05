import {classNames} from "@/shared/lib/classNames";
import {AppLink, AppLinkTheme} from "@/shared";

import cls from './Navbar.module.scss';
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string,
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation();

    return (
        <div className={classNames (cls.Navbar, {}, [className])}>
            <div className={cls.linksContainer}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>{t('Главная')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>{t('О сайте')}</AppLink>
            </div>
        </div>
    );
};
