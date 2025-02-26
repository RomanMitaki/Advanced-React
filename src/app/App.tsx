import React, { Suspense, useEffect } from 'react';

import { classNames } from '@/shared/lib/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { useAppDispatch } from '@/app/providers/StoreProvider';
import { userActions } from '@/entities/User';

import { AppRouter } from './providers/router';

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <div className="page-wrapper">
                        <AppRouter />
                    </div>
                </div>
            </Suspense>
        </div>
    );
}

export default App;
