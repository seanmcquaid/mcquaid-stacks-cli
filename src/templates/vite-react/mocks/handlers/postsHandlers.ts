import { rest } from 'msw';

export const getPostsHandler = rest.get(
  'https://jsonplaceholder.typicode.com/posts',
  (_, res, context) => {
    return res(
      context.status(200),
      context.json([{ title: 'example', body: 'body', id: 1, userId: 2 }]),
    );
  },
);

export const getPostByIdHandler = rest.get(
  'https://jsonplaceholder.typicode.com/posts/1',
  (_, res, context) => {
    return res(
      context.status(200),
      context.json({ title: 'example', body: 'body', id: 1, userId: 2 }),
    );
  },
);
