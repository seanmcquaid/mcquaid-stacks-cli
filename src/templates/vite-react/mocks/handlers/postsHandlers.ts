import { rest } from 'msw';
import { z } from 'zod';
import { generateMock } from '@anatine/zod-mock';
import { postSchema } from '@/types/Post';

export const getPostsHandler = rest.get(
  'https://jsonplaceholder.typicode.com/posts',
  (_, res, context) => {
    return res(
      context.status(200),
      context.json(generateMock(z.array(postSchema))),
    );
  },
);

export const getPostByIdHandler = rest.get(
  'https://jsonplaceholder.typicode.com/posts/1',
  (_, res, context) => {
    return res(context.status(200), context.json(generateMock(postSchema)));
  },
);
