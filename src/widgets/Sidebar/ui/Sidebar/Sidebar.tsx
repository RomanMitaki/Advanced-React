import {classNames} from "@/shared/lib/classNames";
import {useState} from "react";
import {ThemeSwitcher} from "@/widgets/ThemeSwitcher";
import {LangSwitcher} from "@/widgets/LangSwitcher";

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string,
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {setCollapsed(!collapsed)};

    return (
        <div className={classNames (cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>TOGGLE</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>

        </div>
    );
};