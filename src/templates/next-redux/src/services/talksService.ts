import type { Talk } from '@prisma/client';
import createApiClient from './createApiClient';
import type CreateTalkBody from '@/types/requests/CreateTalkBody';

const apiClient = createApiClient('/api');

const talksService = {
  getTalks: () => apiClient.get('talks').json<Talk[]>(),
  createTalk: (talk: CreateTalkBody) =>
    apiClient.post('talks', { json: talk }).json<Talk>(),
} as const;

export default talksService;
