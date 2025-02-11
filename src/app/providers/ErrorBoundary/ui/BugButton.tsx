import { useEffect, useState } from 'react';

import { classNames } from '@/shared/lib/classNames';
import { Button, ThemeButton } from '@/shared';

interface BugButtonProps {
    className?: string
}

// Компонент для тестирования
export const BugButton = ({ className = '' }: BugButtonProps) => {
    const [error, setError] = useState(false);

    const throwE = () => { setError(true); };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button theme={ThemeButton.CLEAR} onClick={throwE} className={classNames('', {}, [className])}>
            throw error
        </Button>
    );
};
