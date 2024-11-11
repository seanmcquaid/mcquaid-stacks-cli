import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import postsService from '@/services/postsService';
import {
  getPostQuery,
  getPostsQuery,
  PostsQueryKeys,
} from '@/services/queries/posts';
import type Post from '@/types/Post';
import { useToast } from '@/hooks/useToast';

export const useGetPostQuery = (id: string, initialData?: Post) => {
  return useQuery({ ...getPostQuery(id), initialData });
};

export const useGetPostsQuery = (initialData?: Post[]) => {
  return useQuery({
    ...getPostsQuery(),
    initialData,
  });
};

export const useDeletePostMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (id: string) => postsService.deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [PostsQueryKeys.GET_POSTS],
      });
      toast({ title: 'I got deleted' });
    },
  });
};
