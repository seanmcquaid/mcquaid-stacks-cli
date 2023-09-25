'use client';

import LoadingSpinner from '@/components/ui/LoadingSpinner';
import PageWrapper from '@/components/ui/PageWrapper';
import useAppTranslation from '@/hooks/useAppTranslation';
import { useAppSelector } from '@/store';
import {
  selectAbstract,
  selectTalkCategory,
  selectTalkLength,
  selectTopic,
} from '@/store/talk/selectors';
import { useChat } from 'ai/react';
import { Button, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';

const CreateSlidesPage = () => {
  const { t } = useAppTranslation();
  const talkLength = useAppSelector(selectTalkLength);
  const talkCategory = useAppSelector(selectTalkCategory);
  const topic = useAppSelector(selectTopic);
  const abstract = useAppSelector(selectAbstract);
  const { messages, handleSubmit, reload, isLoading, error } = useChat({
    api: '/api/prompt',
    initialInput: `Give me a list of slides and four bullet points for each slide for a technical talk on ${topic} that is ${talkLength} minutes long and is in the ${talkCategory} category. The abstract is ${abstract}`,
  });
  const filteredMessages = messages.filter(message => message.role !== 'user');
  const router = useRouter();

  const handleGoToNextPage = () => {
    router.push('/');
  };

  return (
    <PageWrapper>
      <Typography.Title>{t('CreateSlidesPage.title')}</Typography.Title>
      <Typography.Paragraph>
        {t('CreateSlidesPage.subtitle')}
      </Typography.Paragraph>
      {!!messages.length && !isLoading && (
        <Button onClick={handleGoToNextPage}>
          {t('CreateSlidesPage.goToNextPage')}
        </Button>
      )}
      {!!messages.length && !isLoading ? (
        <>
          <Typography.Paragraph>
            {t('CreateSlidesPage.tryAgain')}
          </Typography.Paragraph>
          <Button onClick={() => reload()} loading={isLoading}>
            {t('CreateSlidesPage.reload')}
          </Button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <Button htmlType="submit" loading={isLoading}>
            {t('CreateSlidesPage.load')}
          </Button>
        </form>
      )}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <UnstyledList data-testid="abstract">
          {filteredMessages.map((m, index) => (
            <UnstyledListItem key={index}>
              <UnstyledList>
                {m.content.split('\n').map((str, index2) => (
                  <UnstyledListItem key={index + index2}>
                    {str}
                  </UnstyledListItem>
                ))}
              </UnstyledList>
            </UnstyledListItem>
          ))}
        </UnstyledList>
      )}
      {error && <Typography.Paragraph>{error.message}</Typography.Paragraph>}
    </PageWrapper>
  );
};

const UnstyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const UnstyledListItem = styled.li`
  margin: 0;
  padding: 0;
`;

export default CreateSlidesPage;
