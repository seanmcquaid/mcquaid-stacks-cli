import { mockDb } from '@/setupTests';
import { auth } from '@clerk/nextjs';
import type { MockedFunction } from 'vitest';
import { DELETE, GET, PUT } from '../route';
import type { NextRequest } from 'next/server';
import type { SignedInAuthObject } from '@clerk/nextjs/dist/types/server';
import type { Talk } from '@prisma/client';

vi.mock('@clerk/nextjs');

const mockAuth = auth as MockedFunction<typeof auth>;

describe('/talks/[id]', () => {
  describe('GET', () => {
    it('Returns 404 if no talk is found', async () => {
      mockAuth.mockReturnValueOnce({ userId: '123' } as SignedInAuthObject);
      const result = await GET({} as NextRequest, {
        params: {
          id: '123',
        },
      });
      expect(result.status).toBe(404);
    });
    it('Returns 403 if userId does not match the userId with the talk', async () => {
      mockAuth.mockReturnValueOnce({ userId: '123' } as SignedInAuthObject);
      mockDb.talk.findUnique.mockResolvedValueOnce({
        id: '123',
        title: 'Test talk',
        userId: '456',
        talkLength: 30,
        topic: 'Test topic',
        abstract: 'Test abstract',
      } as Talk);
      const result = await GET({} as NextRequest, {
        params: {
          id: '123',
        },
      });
      expect(result.status).toBe(403);
    });
    it('Returns successful response if talk is found and userId matches', async () => {
      mockAuth.mockReturnValueOnce({ userId: '456' } as SignedInAuthObject);
      mockDb.talk.findUnique.mockResolvedValueOnce({
        id: '123',
        title: 'Test talk',
        userId: '456',
        talkLength: 30,
        topic: 'Test topic',
        abstract: 'Test abstract',
      } as Talk);
      const result = await GET({} as NextRequest, {
        params: {
          id: '123',
        },
      });
      expect(result.status).toBe(200);
      expect(await result.json()).toEqual({
        id: '123',
        title: 'Test talk',
        userId: '456',
        talkLength: 30,
        topic: 'Test topic',
        abstract: 'Test abstract',
      });
    });
  });
  describe('DELETE', () => {
    beforeEach(() => {
      mockAuth.mockReturnValueOnce({ userId: '123' } as SignedInAuthObject);
    });
    it('Returns a 204 on successful deletion', async () => {
      const result = await DELETE({} as NextRequest, { params: { id: '1' } });
      expect(result.status).toBe(204);
    });
    it('Returns a 500 when the deletion fails', async () => {
      mockDb.talk.delete.mockRejectedValueOnce(null);
      const result = await DELETE({} as NextRequest, { params: { id: '1' } });
      expect(result.status).toBe(500);
    });
  });
  describe('PUT', () => {
    it('Returns a 404 if no talk is found', async () => {
      mockAuth.mockReturnValueOnce({ userId: '123' } as SignedInAuthObject);
      const result = await PUT({ json: () => ({}) } as NextRequest, {
        params: {
          id: '123',
        },
      });
      expect(result.status).toBe(404);
    });
    it('Returns a 403 if the userId does not match the userId with the talk', async () => {
      mockAuth.mockReturnValueOnce({ userId: '123' } as SignedInAuthObject);
      mockDb.talk.findUnique.mockResolvedValueOnce({
        id: '123',
        title: 'Test talk',
        userId: '456',
        talkLength: 30,
        topic: 'Test topic',
        abstract: 'Test abstract',
      } as Talk);
      const result = await PUT({ json: () => ({}) } as NextRequest, {
        params: {
          id: '123',
        },
      });
      expect(result.status).toBe(403);
    });
    it('Returns a 200 on successful update', async () => {
      mockAuth.mockReturnValueOnce({ userId: '123' } as SignedInAuthObject);
      mockDb.talk.findUnique.mockResolvedValueOnce({
        id: '123',
        title: 'Test talk',
        userId: '123',
        talkLength: 30,
        topic: 'Test topic',
        abstract: 'Test abstract',
      } as Talk);
      mockDb.talk.update.mockResolvedValueOnce({
        id: '123',
        title: 'Test talk',
        userId: '123',
        talkLength: 30,
        topic: 'Test topic',
        abstract: 'Test abstract',
      } as Talk);
      const result = await PUT(
        {
          json: async () => ({
            id: '123',
            title: 'Test talk',
            userId: '123',
            talkLength: 30,
            topic: 'Test topic',
            abstract: 'Test abstract',
            category: 'Test category',
          }),
        } as NextRequest,
        {
          params: {
            id: '123',
          },
        },
      );
      expect(result.status).toBe(200);
    });
  });
});
