import postsService from '../services/postsService';

const getPostQuery = (id: string) => ({
  queryKey: ['getPost', id],
  queryFn: async () => postsService.getPost(id),
});

export default getPostQuery;
