import React from 'react';
import {Link} from 'react-router-dom';
import { useTheme } from '@/app/providers/ThemeProvider';
import {classNames} from "@/shared/lib/classNames";
import { AppRouter } from './providers/router';

import './styles/index.scss';


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>SWITCH THEME</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter/>
        </div>
    );
};

export default App;