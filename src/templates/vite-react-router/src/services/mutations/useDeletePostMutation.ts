import { useMutation, useQueryClient } from '@tanstack/react-query';
import postsService from '@/services/postsService';
import QueryKey from '@/constants/QueryKey';

const useDeletePostMutation = () => {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: async (id: string) => postsService.deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.GET_POSTS],
      });
    },
  });

  return result;
};

export default useDeletePostMutation;
