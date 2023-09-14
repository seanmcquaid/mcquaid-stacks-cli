import {
  useSearchParams,
  type ActionFunction,
  type LoaderFunction,
  useFetcher,
} from 'react-router-dom';
import PageWrapper from '@/components/app/PageWrapper';
import { Button } from '@/components/ui/Button';
import useAppTranslation from '@/i18n/useAppTranslation';
import Modal from '@/components/app/Modal';

export const Loader: LoaderFunction = ({ request, params }) => {
  console.log(request, params);
  return {};
};

export const Action: ActionFunction = ({ request, params }) => {
  console.log(request, params);
  return {};
};

const ReactRouterGeneroutedPage = () => {
  const { t } = useAppTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const fetcher = useFetcher();
  const isModalOpen = searchParams.get('modal') === 'open';

  const handleOpenModal = () => {
    setSearchParams({ modal: 'open' });
  };

  const handleOnConfirm = () => {
    fetcher.submit(
      { data: 'example' },
      {
        method: 'POST',
      },
    );
  };

  const handleCloseModal = () => {
    searchParams.delete('modal');
    setSearchParams(searchParams);
  };

  return (
    <PageWrapper>
      <Button onClick={handleOpenModal}>
        {t('ReactRouterGeneroutedPage.openModal')}
      </Button>
      <Modal
        title="Modal Title"
        description="Modal Description"
        handleOnConfirm={handleOnConfirm}
        confirmButtonText="Confirm"
        isOpen={isModalOpen}
        handleOnClose={handleCloseModal}
      />
    </PageWrapper>
  );
};

export default ReactRouterGeneroutedPage;
