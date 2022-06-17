import {useDispatch} from 'react-redux';
import type {AppDispatch} from '../lib/store/configureStore';

export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
