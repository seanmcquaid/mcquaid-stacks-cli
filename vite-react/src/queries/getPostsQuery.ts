import postsService from '../services/postsService';

const getPostsQuery = () => ({
  queryKey: ['getPosts'],
  queryFn: () => postsService.getPosts(),
});

export default getPostsQuery;
