import { useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from './store';

// Типизированный useDispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

// Типизированный useSelector для удобства
export const useAppSelector: <TSelected>(
    selector: (state: RootState) => TSelected,
) => TSelected = useSelector;
