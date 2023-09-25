import type { NextRequest } from 'next/server';
import { POST } from '../route';
import { auth } from '@clerk/nextjs';
import type { MockedFunction } from 'vitest';
import type { SignedInAuthObject } from '@clerk/nextjs/dist/types/server';
import { mockDb } from '@/setupTests';
import type { Talk } from '@prisma/client';

vi.mock('@clerk/nextjs');

const mockAuth = auth as MockedFunction<typeof auth>;

describe('/talks', () => {
  describe('POST', () => {
    beforeEach(() => {
      mockAuth.mockReturnValue({ userId: 'test' } as SignedInAuthObject);
    });
    it('Successfully responds if a valid request body is provided', async () => {
      mockDb.talk.create.mockResolvedValueOnce({
        id: '123',
        title: 'Test talk',
        userId: '456',
        talkLength: 30,
        topic: 'Test topic',
        abstract: 'Test abstract',
      } as Talk);
      const result = await POST({
        json: async () => ({
          title: 'Test',
          talkLength: 30,
          abstract: 'Test',
          topic: 'Test',
          category: 'Test category',
        }),
      } as NextRequest);
      expect(result.status).toBe(200);
    });
    it('Throws an error if an invalid request body is provided', async () => {
      const result = await POST({
        json: async () => ({
          title: 'Test',
          talkLength: '30',
          abstract: 'Test',
          topic: 'Test',
          category: 'Test category',
        }),
      } as NextRequest);
      expect(result.status).toBe(500);
    });
  });
});
