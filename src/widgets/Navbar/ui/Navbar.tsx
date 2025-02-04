import {classNames} from "@/shared/lib/classNames";
import {AppLink, AppLinkTheme} from "@/shared";

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string,
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames (cls.Navbar, {}, [className])}>
            <div className={cls.linksContainer}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    );
};
