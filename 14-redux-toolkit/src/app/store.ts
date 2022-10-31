import { configureStore } from '@reduxjs/toolkit';
import searchPetsParams from '../features/search-pets/searchPetsSlice';

/**
 * configureStore -> this is a wrapper around the basic Redux Create Store Function.
 * It automatically store with the right defaults. For example,
 *  1. turns on the Redux Dev Tools Extensions.
 *  2. adds whatever Redux middleware you supply, includes redux-thunk by default
 *  3. automatically combine your slice reducers
 */

// why should i use redux -> https://www.reddit.com/r/reactjs/comments/squatd/should_we_be_teaching_redux_in_2022/
export const store = configureStore({
  reducer: {
    searchPetsParams,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
/**
 * we're taking the store's dispatch function and we're asking TypeScript, "what is this thing?
 * We're exporting the type of that function as a thing we can use.
 */
export type RootState = ReturnType<typeof store.getState>;
/**
 * There's nothing specific to Redux Toolkit about this.
 * It's using TypeScript's inference to figure out as much as possible,
 * so that we don't have to declare this ourselves.
 * And so if we add more slice reducers to our store, that type updates automatically.
 */
export type AppDispatch = typeof store.dispatch;
