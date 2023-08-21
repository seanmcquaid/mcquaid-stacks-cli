import { LoaderFunctionArgs } from 'react-router-dom';
import { Loader as postDetailsLoader } from '../../../pages/post/[id]';

describe('postDetailsLoader', () => {
  it('throws an error if no id is provided', () => {
    expect(() =>
      postDetailsLoader({ params: {} } as LoaderFunctionArgs),
    ).toThrowError('An ID is required');
  });
});
