import { Pet as PetType } from '../types/common';
import Pet from './Pet';

type Props = {
  pets: PetType[];
};

const Results = ({ pets }: Props) => {
  // throw new Error('I Crashed 🤷🏻‍♂️');
  return (
    <div className="search">
      {!pets.length && <h1>No Pets Found</h1>}
      {pets &&
        pets.map((pet) => (
          <Pet
            // {...pet}
            key={pet.id}
            animal={pet.animal}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))}
    </div>
  );
};

export default Results;
