import { CSSProperties, useMemo } from 'react';

import { classNames } from '@/shared/lib/classNames';

import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string,
    src?: string,
    size?: number,
    alt?: string,
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        size,
        alt = 'avatar',
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size ?? 100,
        height: size ?? 100,
    }), [size]);

    return (
        <img
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            style={styles}
            alt={alt}
        />
    );
};
