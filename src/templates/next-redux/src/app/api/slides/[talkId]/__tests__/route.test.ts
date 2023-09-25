import { mockDb } from '@/setupTests';
import { auth } from '@clerk/nextjs';
import type { SignedInAuthObject } from '@clerk/nextjs/dist/types/server';
import type { MockedFunction } from 'vitest';
import { GET, POST } from '../route';
import type { NextRequest } from 'next/server';
import type { Slide } from '@prisma/client';

vi.mock('@clerk/nextjs');

const mockAuth = auth as MockedFunction<typeof auth>;

describe('/slides/[talkId]', () => {
  beforeEach(() => {
    mockAuth.mockReturnValue({ userId: '123' } as SignedInAuthObject);
  });
  describe('GET', () => {
    it('returns a 200 on successful request', async () => {
      mockDb.slide.findMany.mockResolvedValueOnce([]);
      const result = await GET({} as NextRequest, {
        params: { talkId: '123' },
      });
      expect(result.status).toBe(200);
    });
    it('returns a 500 if the slides could not be retrieved', async () => {
      mockDb.slide.findMany.mockRejectedValueOnce(null);
      const result = await GET({} as NextRequest, {
        params: { talkId: '123' },
      });
      expect(result.status).toBe(500);
    });
  });
  describe('POST', () => {
    it('returns a 200 on successful request', async () => {
      mockDb.slide.create.mockResolvedValueOnce({
        id: '123',
        title: 'test',
        talkId: '123',
        userId: 'test',
        sortOrder: 1,
        bulletPoints: [],
        notes: [],
      } as unknown as Slide);
      const result = await POST(
        {
          json: async () => ({
            title: 'test',
            sortOrder: 1,
            bulletPoints: [],
            notes: [],
          }),
        } as NextRequest,
        {
          params: { talkId: '123' },
        },
      );
      expect(result.status).toBe(200);
    });
    it('returns a 500 if the slide could not be created', async () => {
      mockDb.slide.create.mockRejectedValueOnce(null);
      const result = await POST(
        {
          json: async () => ({}),
        } as NextRequest,
        {
          params: { talkId: '123' },
        },
      );
      expect(result.status).toBe(500);
    });
  });
});
