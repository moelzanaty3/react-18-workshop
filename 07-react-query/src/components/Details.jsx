import { useParams, useNavigate } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
