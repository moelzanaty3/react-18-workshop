import { useState, useEffect, useCallback } from 'react';

const localCache = {};

const useBreedList = (animal) => {
  const [breedList, setBreedList] = useState([]);

  const fetchBreedList = useCallback(async () => {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
    );
    const json = await res.json();
    localCache[animal] = json.breeds || [];
    setBreedList(localCache[animal]);
  }, [animal]);

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      fetchBreedList();
    }
  }, [animal, fetchBreedList]);

  return breedList;
};

export default useBreedList;
