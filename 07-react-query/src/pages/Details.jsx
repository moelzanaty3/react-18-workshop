import { useParams, useNavigate } from 'react-router-dom';
import usePet from '../hooks/usePet';

const Details = () => {
  const { id } = useParams();
  const petQuery = usePet(id);
  const navigate = useNavigate();
  console.log(petQuery);
  return (
    <div className="details">
      <h2>Pet {id} Details Page!</h2>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Back
      </button>
    </div>
  );
};

export default Details;
