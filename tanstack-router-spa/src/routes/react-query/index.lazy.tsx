import { createLazyFileRoute } from '@tanstack/react-router';
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import PageWrapper from '@/components/app/PageWrapper';
import { Button } from '@/components/ui/Button';
import LinkButton from '@/components/ui/LinkButton';
import useAppTranslation from '@/hooks/useAppTranslation';
import { getPostsQueryOptions, PostsQueryKeys } from '@/services/queries/posts';
import { useToast } from '@/hooks/useToast';
import postsService from '@/services/postsService';

const ReactQueryPage = () => {
  const { t } = useAppTranslation();
  const { data, isLoading, isError } = useSuspenseQuery(getPostsQueryOptions());
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { mutate: deletePost, isPending: deletePostLoading } = useMutation({
    mutationFn: async (id: string) => postsService.deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [PostsQueryKeys.GET_POSTS],
      });
      toast({ title: 'I got deleted' });
    },
  });

  return (
    <PageWrapper isLoading={isLoading} isError={isError}>
      <h1>{t('ReactQueryPage.title')}</h1>
      <ul className="grid grid-cols-2">
        {data?.map(post => (
          <li key={post.id} className="mt-4 flex items-center">
            {post.title.substring(0, 5)}
            <Button
              onClick={() => deletePost(post.id.toString())}
              disabled={deletePostLoading}
              className="ml-4"
            >
              {t('ReactQueryPage.delete')}
            </Button>
            <LinkButton
              to="/react-query/$id"
              className="ml-4"
              params={{
                id: post.id.toString(),
              }}
            >
              {t('ReactQueryPage.view')}
            </LinkButton>
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
};

export const Route = createLazyFileRoute('/react-query/')({
  component: ReactQueryPage,
});
