import { ReactNode } from 'react';

import { MainPageAsync } from '@/pages/MainPage';
import { AboutPageAsync } from '@/pages/AboutPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    // last
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    // last
    [AppRoutes.NOT_FOUND]: '*',
};

export interface AppRoute {
    key: string;
    path: string; // Обязательно нужен путь
    element: ReactNode; // Ссылка на компонент
    authOnly?: boolean;
}

export const routeConfig: AppRoute[] = [
    {
        key: RoutePath.main,
        path: RoutePath.main,
        element: <MainPageAsync />,
    },
    {
        key: RoutePath.about,
        path: RoutePath.about,
        element: <AboutPageAsync />,
    },
    {
        key: RoutePath.profile,
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
    // last
    {
        key: RoutePath.not_found,
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
];
