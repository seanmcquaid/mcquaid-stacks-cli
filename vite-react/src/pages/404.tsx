import { useNavigate } from '@/router';
import { Button } from '@/components/ui/Button';
import PageWrapper from '@/components/app/PageWrapper';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/');
  };

  return (
    <PageWrapper>
      <h1>Not Found</h1>
      <p>Please try a different route!</p>
      <Button onClick={handleOnClick}>Home</Button>
    </PageWrapper>
  );
};

export default NotFoundPage;
