import { Button } from '@/components/ui/Button';
import useAppTranslation from '@/i18n/useAppTranslation';
import useDeletePostMutation from '@/services/mutations/useDeletePostMutation';

interface DeleteButtonProps {
  id: number;
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const { t } = useAppTranslation();
  const { mutate: deletePost, isPending: deletePostLoading } =
    useDeletePostMutation();

  return (
    <Button
      onClick={() => deletePost(id.toString())}
      disabled={deletePostLoading}
      className="ml-4"
    >
      {t('ReactQueryPage.delete')}
    </Button>
  );
};

export default DeleteButton;
