import { FC, lazy } from 'react';

import { LoginFormProps } from '@/features/AuthByUsername/ui/LoginForm/LoginForm';

async function delayForDemo(promise: any) {
    await new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });
    return promise;
}

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => delayForDemo(import('./LoginForm')));
