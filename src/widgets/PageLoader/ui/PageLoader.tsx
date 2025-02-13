import { Loader } from '@/shared';
import { classNames } from '@/shared/lib/classNames';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string
}
export const PageLoader = ({ className = '' }: PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
