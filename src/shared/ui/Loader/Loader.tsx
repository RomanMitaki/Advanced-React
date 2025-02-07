import { classNames } from '@/shared/lib/classNames';

import './Loader.scss';

interface PageLoaderProps {
    className?: string,
}

export const Loader = ({ className }: PageLoaderProps) => (

    <div className={classNames('lds-ring', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>

);
