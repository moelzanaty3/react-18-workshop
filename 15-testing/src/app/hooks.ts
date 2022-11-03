// https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks

import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
// here we just aliasing the useSelector function, but after adding types.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/**
 * this is a new pattern recommended for people using TypeScript.
 * React-Redux has hooks and there are TypeScripts that say how those hooks work,
 * but those hooks don't know anything about the specific state.
 * So, what we've found is it's best to create pre-defined versions of those React-Redux hooks
 * that already know the right types for our state and our dispatch.
 */
