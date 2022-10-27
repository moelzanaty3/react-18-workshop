import { useState } from 'react';
import useBreedList from '../hooks/useBreedList';
import Results from '../components/Results';
import usePetsSearch from '../hooks/usePetsSearch';
import Loader from '../components/Loader';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    animal: '',
    breed: '',
  });

  const petsQuery = usePetsSearch(searchParams);
  const pets = petsQuery?.data?.pets ?? [];

  const breedsQuery = useBreedList(searchParams.animal);
  let breeds = breedsQuery?.data?.breeds ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formDate = new FormData(e.target);
          console.log(e.target);
          const animal = formDate.get('animal');
          const location = formDate.get('location');
          const breed = formDate.get('breed');
          setSearchParams({ animal, location, breed });
        }}
      >
        <label htmlFor="location">
          Location
          <input id="location" placeholder="Location" name="location" />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            onChange={(e) => {
              setSearchParams({
                ...searchParams,
                animal: e.target.value,
                breed: '',
              });
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
          <select disabled={!breeds.length} id="breed" name="breed">
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
      {petsQuery.isError && <span>{petsQuery.error}</span>}
      {petsQuery.isFetched && <Results pets={pets} />}
    </div>
  );
};

export default SearchParams;
