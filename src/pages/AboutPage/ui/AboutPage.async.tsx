import { lazy } from 'react';

async function delayForDemo(promise: any) {
    await new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });
    return promise;
}

export const AboutPageAsync = lazy(() => delayForDemo(import('./AboutPage')));
