import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { PageLoader } from '@/widgets/PageLoader';

const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {routeConfig.map(({ key, path, element }) => (
                <Route
                    key={key}
                    path={path}
                    element={element}
                />
            ))}
        </Routes>
    </Suspense>
);

export { AppRouter };
