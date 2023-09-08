import { useMutation, useQueryClient } from '@tanstack/react-query';
import postsService from '@/services/postsService';
import QueryKey from '@/constants/QueryKey';

export const deletePostMutation = (id: string) => ({
  mutationFn: () => postsService.deletePost(id),
});

const useDeletePostMutation = (id: string) => {
  const queryClient = useQueryClient();
  const result = useMutation({
    ...deletePostMutation(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.GET_POSTS],
      });
    },
  });

  return result;
};

export default useDeletePostMutation;
