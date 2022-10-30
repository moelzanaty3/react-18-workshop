import { useQuery, QueryFunction } from '@tanstack/react-query';
import { SearchPetsAPIResponse } from '../types/common';

// 📖 Read this -> React Query and TypeScript

const fetchPet: QueryFunction<SearchPetsAPIResponse, ['pet', number]> = async ({
  queryKey,
}) => {
  const [, id] = queryKey;
  const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
  return res.json();
};

const usePet = (petId: number) => {
  return useQuery(['pet', petId], fetchPet);
};

export default usePet;
