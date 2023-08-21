import { ActionFunctionArgs } from 'react-router-dom';
import { Action as postsAction } from '../../../pages/index';

describe('postsAction', () => {
  it('should return null if no postId is provided', async () => {
    const result = await postsAction({
      request: {
        formData: () => Promise.resolve(new FormData()),
      },
    } as unknown as ActionFunctionArgs);
    expect(result).toBeNull();
  });
  it('should return null if the form is not valid', async () => {
    const formData = new FormData();
    formData.append('postId', '1234');
    const result = await postsAction({
      request: {
        formData: () => Promise.resolve(formData),
      },
    } as unknown as ActionFunctionArgs);
    expect(result).toBeNull();
  });
  it('should not return null if the form is valid', async () => {
    const formData = new FormData();
    formData.append('postId', '1');
    const result = await postsAction({
      request: {
        formData: () => Promise.resolve(formData),
      },
    } as unknown as ActionFunctionArgs);
    expect(result).not.toBeNull();
  });
});
