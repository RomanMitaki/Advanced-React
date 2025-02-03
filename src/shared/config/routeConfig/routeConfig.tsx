import {RouteProps} from "react-router-dom";
import {MainPageAsync} from "@/pages/MainPage";
import {AboutPageAsync} from "@/pages/AboutPage";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
}

export interface AppRoute extends RouteProps {
    key: string; // добавляем ключ для маршрутов
}

export const routeConfig: AppRoute[] = [
    {
        key: RoutePath.main,
        path: RoutePath.main,
        element: <MainPageAsync/>
    },
    {
        key: RoutePath.about,
        path: RoutePath.about,
        element: <AboutPageAsync/>
    }
];

