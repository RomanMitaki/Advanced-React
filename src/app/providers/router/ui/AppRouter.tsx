import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { PageLoader } from '@/widgets/PageLoader';
import { useAppSelector } from '@/app/providers/StoreProvider';
import { getUserAuthData } from '@/entities/User';

const AppRouter = memo(() => {
    const isAuth = useAppSelector(getUserAuthData);

    const routes = useMemo(() => Object.values(routeConfig)
        .filter((route) => !(route.authOnly && !isAuth)), [isAuth]);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({ key, path, element }) => (
                    <Route
                        key={key}
                        path={path}
                        element={element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
});

export { AppRouter };
