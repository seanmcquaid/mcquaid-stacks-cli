import '@testing-library/jest-dom/vitest';
import 'cross-fetch/polyfill';
import server from '../../../mocks/server';

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
