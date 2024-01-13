import {
  useSearchParams,
  type ClientActionFunction,
  type ClientLoaderFunction,
  useFetcher,
  useLoaderData,
} from '@remix-run/react';
import { z } from 'zod';
import PageWrapper from '@/components/app/PageWrapper';
import { Button } from '@/components/ui/Button';
import useAppTranslation from '@/hooks/useAppTranslation';
import Modal from '@/components/app/Modal';

export const clientLoader: ClientLoaderFunction = () => {
  return {
    hello:
      "Hello friends! This page is using patterns common to React Router v6's Loaders + Actions",
  };
};

export const clientAction: ClientActionFunction = async ({ request }) => {
  const json = await request.json();

  alert(JSON.stringify(json));

  return json;
};

export const Component = () => {
  const { t } = useAppTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const fetcher = useFetcher();
  const isModalOpen = z.coerce
    .boolean()
    .catch(false)
    .parse(searchParams.get('modal'));
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
        action: '/react-router',
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
