import { mockDb } from '@/setupTests';
import type { Slide } from '@prisma/client';
import { DELETE, PUT } from '../route';
import type { NextRequest } from 'next/server';

describe('/slides/[talkId]/[slideId]', () => {
  describe('DELETE', () => {
    it('returns a 204 on successful request', async () => {
      mockDb.slide.delete.mockResolvedValueOnce({} as Slide);
      const result = await DELETE({} as NextRequest, {
        params: { slideId: '1' },
      });
      expect(result.status).toBe(204);
    });
    it('returns a 500 if the slide could not be deleted', async () => {
      mockDb.slide.delete.mockRejectedValueOnce(new Error('test'));
      const result = await DELETE({} as NextRequest, {
        params: { slideId: '1' },
      });
      expect(result.status).toBe(500);
    });
  });
  describe('PUT', () => {
    it('returns a 200 on successful request', async () => {
      mockDb.slide.update.mockResolvedValueOnce({} as Slide);
      const result = await PUT(
        {
          json: async () =>
            ({
              title: 'test',
              sortOrder: 1,
              bulletPoints: [],
              notes: [],
            } as unknown as Slide),
        } as NextRequest,
        {
          params: { slideId: '1' },
        },
      );
      expect(result.status).toBe(200);
    });
    it('returns a 500 if the slide could not be updated', async () => {
      mockDb.slide.update.mockRejectedValueOnce(new Error('test'));
      const result = await PUT(
        {
          json: async () => ({}),
        } as NextRequest,
        {
          params: { slideId: '1' },
        },
      );
      expect(result.status).toBe(500);
    });
  });
});
