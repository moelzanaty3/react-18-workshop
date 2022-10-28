export type Animal = 'dog' | 'cat' | 'bird' | 'reptile' | 'rabbit';

export interface Pet {
  id: number;
  name: string;
  animal: Animal;
  city: string;
  state: string;
  description: string;
  breed: string;
  images: string[];
}
