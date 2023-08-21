import { test as base, expect } from '@playwright/test';
import { createWorkerFixture, MockServiceWorker } from 'playwright-msw';
import handlers from '../mocks/handlers/index.js';

const test = base.extend<{
  worker: MockServiceWorker;
}>({
  worker: createWorkerFixture(handlers),
});

export { test, expect };
