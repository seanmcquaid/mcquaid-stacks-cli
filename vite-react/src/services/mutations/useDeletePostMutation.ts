import { useMutation, useQueryClient } from '@tanstack/react-query';
import postsService from '../postsService';

export const deletePostMutation = (id: string) => ({
  mutationKey: ['deletePost', id],
  mutationFn: () => postsService.deletePost(id),
});

const useDeletePostMutation = (id: string) => {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationKey: ['deletePost', id],
    mutationFn: () => postsService.deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    },
  });

  return result;
};

export default useDeletePostMutation;
