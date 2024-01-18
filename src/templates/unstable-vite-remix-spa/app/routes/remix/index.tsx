import type { ClientActionFunctionArgs } from '@remix-run/react';
import { useSearchParams, useFetcher, useLoaderData } from '@remix-run/react';
import { z } from 'zod';
import PageWrapper from '@/components/app/PageWrapper';
import { Button } from '@/components/ui/Button';
import useAppTranslation from '@/hooks/useAppTranslation';
import Modal from '@/components/app/Modal';

export const clientLoader = () => {
  return {
    hello:
      "Hello friends! This page is using patterns common to React Router v6's Loaders + Actions",
  };
};

export const clientAction = async ({ request }: ClientActionFunctionArgs) => {
  const json = await request.json();

  alert(JSON.stringify(json));

  return json;
};

const RemixPage = () => {
  const { t } = useAppTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const fetcher = useFetcher();
  const isModalOpen = z.coerce
    .boolean()
    .catch(false)
    .parse(searchParams.get('modal'));
  const loaderData = useLoaderData<typeof clientLoader>();

  const handleOpenModal = () => {
    setSearchParams({ modal: 'open' });
  };

  const handleOnConfirm = () => {
    fetcher.submit(
      { hello: 'You have made a successful action occur!' },
      {
        method: 'POST',
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

export default RemixPage;
