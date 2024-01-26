import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { Route as AppRoute } from '.';
import Modal from '@/components/app/Modal';
import PageWrapper from '@/components/app/PageWrapper';
import { Button } from '@/components/ui/Button';
import useAppTranslation from '@/hooks/useAppTranslation';
import { useToast } from '@/hooks/useToast';

const TanStackRouterPage = () => {
  const { t } = useAppTranslation();
  const { modal } = AppRoute.useSearch();
  const navigate = useNavigate();
  const loaderData = AppRoute.useLoaderData();
  const { toast } = useToast();

  const handleOpenModal = () => {
    navigate({ search: { modal: 'open' } });
  };

  const handleOnConfirm = () => {
    toast({ title: 'YAY' });
    navigate({ search: { modal: undefined } });
  };

  const handleCloseModal = () => {
    navigate({ search: { modal: undefined } });
  };

  return (
    <PageWrapper>
      <h1>{loaderData?.hello}</h1>
      <Button onClick={handleOpenModal}>
        {t('TanStackRouterPage.openModal')}
      </Button>
      <Modal
        title="Modal Title"
        description="Modal Description"
        handleOnConfirm={handleOnConfirm}
        confirmButtonText="Confirm"
        isOpen={modal}
        handleOnClose={handleCloseModal}
      />
    </PageWrapper>
  );
};

export const Route = createLazyFileRoute('/tanstack-router')({
  component: TanStackRouterPage,
});
