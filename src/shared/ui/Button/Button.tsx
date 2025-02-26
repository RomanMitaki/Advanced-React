import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from '@/shared/lib/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background_inverted',
    CLEAR_INVERTED = 'clear_inverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ThemeButton,
    square?: boolean,
    size?: ButtonSize,
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ThemeButton.BACKGROUND,
        square,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme ?? '']]: true,
        [cls.square]: square ?? false,
        [cls[size ?? '']]: true,
        [cls.disabled]: disabled ?? false,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className ?? ''])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
