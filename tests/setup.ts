import '@testing-library/jest-dom';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Configure global test timeout
beforeAll(() => {
  vi.setConfig({ testTimeout: 10000 });
});
