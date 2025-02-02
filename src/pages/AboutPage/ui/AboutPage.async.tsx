import { lazy } from 'react';

export const AboutPageAsync = lazy(() => delayForDemo(import('./AboutPage')));

async function delayForDemo(promise: any) {
    await new Promise(resolve => {
        setTimeout(resolve, 1500);
    });
    return promise;
}
