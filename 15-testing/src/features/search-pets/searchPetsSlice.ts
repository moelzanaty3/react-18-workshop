import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchParams, Animal } from '../../types/common';

/**
 * createSlice -> accepts an object of reducer functions, a slice name, and an initial state value,
 * automatically generates a slice reducer with corresponding action creators and action types.
 */

const slice = createSlice({
  name: 'searchPetsParams',
  initialState: {
    value: { location: '', animal: '' as Animal, breed: '' } as SearchParams,
  },
  reducers: {
    searchAllPets: (state, action: PayloadAction<SearchParams>) => {
      // it's okay to do this because immer make it immutable under the hood
      state.value = action.payload;
    },
  },
});

export const { searchAllPets } = slice.actions;

export default slice.reducer;
