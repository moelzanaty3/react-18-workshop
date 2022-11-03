import { useContext, useState, lazy } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Loader from '../components/Loader';
import AdoptedPetContext from '../contexts/AdoptedPetContext';
import { Pet } from '../types/common';
import { useGetPetQuery } from '../services/pet';

const Modal = lazy(() => import('../components/Modal'));

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  if (!id) {
    throw new Error('no id provided to details');
  }
  // Using a query hook automatically fetches data and returns query values
  const petQuery = useGetPetQuery(+id);
  const navigate = useNavigate();
  const [, setAdoptedPet] = useContext(AdoptedPetContext);

  const pet = petQuery?.data?.pets[0] as Pet;

  return (
    <div className="details">
      {petQuery.isLoading && (
        <div className="loader-container">
          <Loader />
        </div>
      )}
      {petQuery.isError && <span>{(petQuery.error as Error).message}</span>}
      {/* read more about diff btw isLoading/isFetching - https://stackoverflow.com/a/62653366/6483379 */}
      {/* also it will nice to understand more about Status Checks in React Query - https://tkdodo.eu/blog/status-checks-in-react-query */}
      {petQuery.data && (
        <div>
          <Carousel images={pet.images} />
          <h1>{pet.name}</h1>
          <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
          <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
          <p>{pet.description}</p>
          <button
            onClick={() => {
              navigate('/');
            }}
          >
            Back
          </button>
          {showModal && (
            <Modal>
              <div>
                <h1>Would you like to adopt {pet.name}?</h1>
                <div className="buttons">
                  <button
                    onClick={() => {
                      setAdoptedPet(pet);
                      navigate('/');
                    }}
                  >
                    Yes
                  </button>
                  <button onClick={() => setShowModal(false)}>No</button>
                </div>
              </div>
            </Modal>
          )}
        </div>
      )}
    </div>
  );
};

export default Details;
