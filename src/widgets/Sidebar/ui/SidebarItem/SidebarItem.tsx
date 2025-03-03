import { useTranslation } from 'react-i18next';
import { memo } from 'react';

import { AppLink, AppLinkTheme } from '@/shared';

import { SidebarItemType } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation('sidebar');

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={cls.item}
        >
            <item.Icon className={cls.icon} />
            {!collapsed && (
                <span className={cls.link}>
                    {t(item.text)}
                </span>
            )}
        </AppLink>
    );
});
