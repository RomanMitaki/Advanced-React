import React from 'react';
import { useTheme } from '@/app/providers/ThemeProvider';
import {classNames} from "@/shared/lib/classNames";
import { AppRouter } from './providers/router';

import './styles/index.scss';
import {Navbar} from "@/widgets/Navbar";


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
            <button onClick={toggleTheme}>SWITCH THEME</button>
        </div>
    );
};

export default App;