import { FC } from 'react';
import { useNavigate } from '../router';

const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Not Found</h1>
      <p>Please try a different route!</p>
      <button onClick={handleOnClick}>Home</button>
    </div>
  );
};

export default NotFoundPage;
