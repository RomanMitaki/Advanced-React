import { useState } from 'react';

import { classNames } from '@/shared/lib/classNames';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string,
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => { setCollapsed(!collapsed); };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
            >
                TOGGLE
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>

        </div>
    );
};
