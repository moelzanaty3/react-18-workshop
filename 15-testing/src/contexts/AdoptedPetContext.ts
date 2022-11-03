import { createContext, Dispatch, SetStateAction } from 'react';
import { Pet } from '../types/common';

const AdoptedPetContext = createContext<
  [Pet | null, Dispatch<SetStateAction<Pet | null>>]
>([null, () => null]);

export default AdoptedPetContext;
