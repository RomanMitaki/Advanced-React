import { Link, LinkProps } from 'react-router-dom';
import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme,
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        children,
        className,
        to,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
