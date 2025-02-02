import { lazy } from 'react';

export const MainPageAsync = lazy(() => delayForDemo(import('./MainPage')));

async function delayForDemo(promise: any) {
    await new Promise(resolve => {
        setTimeout(resolve, 1500);
    });
    return promise;
}