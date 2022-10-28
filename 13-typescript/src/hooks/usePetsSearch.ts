import { useQuery, QueryFunction } from '@tanstack/react-query';
import { SearchPetsAPIResponse, SearchParams } from '../types/common';

const fetchPets: QueryFunction<
  SearchPetsAPIResponse,
  ['search-pets', SearchParams]
> = async ({ queryKey }) => {
  const [, { animal, location, breed }] = queryKey;
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  return res.json();
};

const usePetsSearch = (searchParams: SearchParams) => {
  return useQuery(['search-pets', searchParams], fetchPets);
};

export default usePetsSearch;
