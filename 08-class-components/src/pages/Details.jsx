import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import usePet from '../hooks/usePet';

const Details = () => {
  const { id } = useParams();
  const petQuery = usePet(id);
  const navigate = useNavigate();
  let pet = petQuery?.data?.pets[0];

  return (
    <div className="details">
      {petQuery.isLoading && (
        <div className="loader-container">
          <Loader />
        </div>
      )}
      {petQuery.isError && <span>{petQuery.error.message}</span>}
      {/* read more about diff btw isLoading/isFetching - https://stackoverflow.com/a/62653366/6483379 */}
      {/* also it will nice to understand more about Status Checks in React Query - https://tkdodo.eu/blog/status-checks-in-react-query */}
      {petQuery.data && (
        <div>
          <h1>{pet.name}</h1>
          <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
          <button>Adopt {pet.name}</button>
          <p>{pet.description}</p>
          <button
            onClick={() => {
              navigate('/');
            }}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Details;
