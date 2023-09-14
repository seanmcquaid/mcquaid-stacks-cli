import {
  useSearchParams,
  type ActionFunction,
  type LoaderFunction,
  useFetcher,
  useLoaderData,
} from 'react-router-dom';
import PageWrapper from '@/components/app/PageWrapper';
import { Button } from '@/components/ui/Button';
import useAppTranslation from '@/i18n/useAppTranslation';
import Modal from '@/components/app/Modal';

export const Loader: LoaderFunction = () => {
  return {
    hello:
      "Hello friends! This page is using patterns common to Generouted and React Router v6's Loaders + Actions",
  };
};

export const Action: ActionFunction = async ({ request }) => {
  const json = await request.json();

  alert(JSON.stringify(json));

  return json;
};

const ReactRouterGeneroutedPage = () => {
  const { t } = useAppTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const fetcher = useFetcher();
  const isModalOpen = searchParams.get('modal') === 'open';
  const loaderData = useLoaderData() as {
    hello?: string;
  };

  const handleOpenModal = () => {
    setSearchParams({ modal: 'open' });
  };

  const handleOnConfirm = () => {
    fetcher.submit(
      { hello: 'You have made a successful action occur!' },
      {
        method: 'POST',
        action: '/react-router-generouted?index',
        encType: 'application/json',
      },
    );
    searchParams.delete('modal');
    setSearchParams(searchParams);
  };

  const handleCloseModal = () => {
    searchParams.delete('modal');
    setSearchParams(searchParams);
  };

  return (
    <PageWrapper>
      <h1>{loaderData?.hello}</h1>
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
