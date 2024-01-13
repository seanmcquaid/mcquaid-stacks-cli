import { useNavigate } from '@tanstack/react-router';
import Modal from '@/components/app/Modal';
import PageWrapper from '@/components/app/PageWrapper';
import { Button } from '@/components/ui/Button';
import useAppTranslation from '@/hooks/useAppTranslation';
import { useToast } from '@/hooks/useToast';
import { Route } from './route';

export const component = function TanStackRouter() {
  const { t } = useAppTranslation();
  const { modal } = Route.useSearch();
  const navigate = useNavigate();
  const loaderData = Route.useLoaderData();
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
