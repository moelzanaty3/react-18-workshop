import { useContext } from 'react';
import Results from '../components/Results';
import Loader from '../components/Loader';
import ErrorBoundary from '../components/ErrorBoundary';
import AdoptedPetContext from '../contexts/AdoptedPetContext';
import { Animal, SearchParams as SearchParamsType } from '../types/common';
import { searchAllPets } from '../features/search-pets/searchPetsSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useGetBreedsQuery, usePetsSearchQuery } from '../services/pet';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
  const [adoptedPet] = useContext(AdoptedPetContext);

  // The `state` arg is correctly typed as `RootState` already
  const searchParams = useAppSelector((state) => state.searchPetsParams.value);
  const dispatch = useAppDispatch();

  const petsQuery = usePetsSearchQuery(searchParams);
  const pets = petsQuery?.data?.pets ?? [];

  const breedsQuery = useGetBreedsQuery(searchParams.animal, {
    skip: !searchParams.animal,
  });
  const breeds = breedsQuery?.data?.breeds ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formDate = new FormData(e.currentTarget);
          // get values
          const animal = formDate.get('animal');
          const location = formDate.get('location');
          const breed = formDate.get('breed');
          // search pet
          dispatch(
            searchAllPets({ animal, location, breed } as SearchParamsType)
          );
        }}
      >
        {adoptedPet && (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        )}
        <label htmlFor="location">
          Location
          <input
            id="location"
            placeholder="Location"
            name="location"
            defaultValue={searchParams.location}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            defaultValue={searchParams.animal}
            onChange={(e) => {
              dispatch(
                searchAllPets({
                  ...searchParams,
                  animal: e.target.value as Animal,
                  breed: '',
                })
              );
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            name="breed"
            defaultValue={searchParams.breed}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {petsQuery.isLoading && (
        <div className="search loader-container">
          <Loader />
        </div>
      )}
      {petsQuery.isError && <span>{(petsQuery.error as Error).message}</span>}
      {petsQuery.data && (
        <ErrorBoundary>
          <Results pets={pets} />
        </ErrorBoundary>
      )}
    </div>
  );
};

export default SearchParams;
