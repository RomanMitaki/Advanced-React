import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "@/theme/useTheme";

import './index.scss';



const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>SWITCH THEME</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />}></Route>
                    <Route path={'/'} element={<MainPageAsync />}></Route>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;