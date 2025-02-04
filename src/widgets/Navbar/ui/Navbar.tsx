import {classNames} from "@/shared/lib/classNames";
import {ThemeSwitcher} from "@/widgets/ThemeSwitcher";
import {AppLink, AppLinkTheme} from "@/shared";

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string,
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames (cls.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={cls.linksContainer}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    );
};
