'use client';

import LoadingSpinner from '@/components/ui/LoadingSpinner';
import PageWrapper from '@/components/ui/PageWrapper';
import useAppTranslation from '@/hooks/useAppTranslation';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  selectTalkCategory,
  selectTalkLength,
  selectTopic,
} from '@/store/talk/selectors';
import { setAbstract } from '@/store/talk/slice';
import { useCreateTalkMutation } from '@/store/talksApi';
import { useChat } from 'ai/react';
import { Button, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const CreateAbstractPage = () => {
  const { t } = useAppTranslation();
  const dispatch = useAppDispatch();
  const topic = useAppSelector(selectTopic);
  const talkLength = useAppSelector(selectTalkLength);
  const category = useAppSelector(selectTalkCategory);
  const { messages, handleSubmit, reload, isLoading, error } = useChat({
    api: '/api/prompt',
    initialInput: `Give me a one paragraph abstract for a talk on ${topic}`,
  });
  const filteredMessages = messages.filter(message => message.role !== 'user');
  const router = useRouter();
  const [createTalk, { isLoading: createTalkLoading }] =
    useCreateTalkMutation();

  const handleGoToNextPage = () => {
    const abstract = filteredMessages[0];
    dispatch(setAbstract(abstract.content));
    createTalk({
      abstract: abstract.content,
      topic,
      category,
      talkLength,
    })
      .unwrap()
      .then(() => {
        router.push('/dashboard/talks');
        toast('Talk created successfully');
      })
      .catch(() => {
        toast('Something went wrong creating your talk, try again!');
      });
  };

  return (
    <PageWrapper>
      <Typography.Title>{t('CreateAbstractPage.title')}</Typography.Title>
      <Typography.Paragraph>
        {t('CreateAbstractPage.subtitle')}
      </Typography.Paragraph>
      {!!messages.length && !isLoading && (
        <Button onClick={handleGoToNextPage} loading={createTalkLoading}>
          {t('CreateAbstractPage.goToNextPage')}
        </Button>
      )}
      {!!messages.length && !isLoading ? (
        <>
          <Typography.Paragraph>
            {t('CreateAbstractPage.tryAgain')}
          </Typography.Paragraph>
          <Button onClick={() => reload()} loading={isLoading}>
            {t('CreateAbstractPage.reload')}
          </Button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <Button htmlType="submit" loading={isLoading}>
            {t('CreateAbstractPage.load')}
          </Button>
        </form>
      )}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ul data-testid="abstract">
          {filteredMessages.map((m, index) => (
            <li key={index}>{m.content}</li>
          ))}
        </ul>
      )}
      {error && <Typography.Paragraph>{error.message}</Typography.Paragraph>}
    </PageWrapper>
  );
};

export default CreateAbstractPage;
