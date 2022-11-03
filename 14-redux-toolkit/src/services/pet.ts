import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  Animal,
  BreedListAPIResponse,
  SearchParams,
  SearchPetsAPIResponse,
} from '../types/common';

// Define a service using a base URL and expected endpoints
export const petApi = createApi({
  reducerPath: 'petApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://pets-v2.dev-apis.com' }),
  endpoints: (builder) => ({
    getPet: builder.query<SearchPetsAPIResponse, number>({
      // query: (id) => `pets?id=${id}`,
      query: (id) => ({ url: 'pets', params: { id } }),
    }),
    getBreeds: builder.query<BreedListAPIResponse, Animal>({
      query: (animal) => ({ url: 'breeds', params: { animal } }),
    }),
    petsSearch: builder.query<SearchPetsAPIResponse, SearchParams>({
      query: (searchParams) => ({
        url: 'pets',
        params: { ...searchParams },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPetQuery, useGetBreedsQuery, usePetsSearchQuery } = petApi;
