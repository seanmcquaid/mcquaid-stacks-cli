'use client';
import PageWrapper from '@/components/ui/PageWrapper';
import { Typography, Button } from 'antd';
import { useChat } from 'ai/react';
import { selectTalkCategory } from '@/store/talk/selectors';
import styled from 'styled-components';
import { setTopic } from '@/store/talk/slice';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import useAppTranslation from '@/hooks/useAppTranslation';

const SelectTopicPage = () => {
  const { t } = useAppTranslation();
  const talkCategory = useAppSelector(selectTalkCategory);
  const dispatch = useAppDispatch();
  const { messages, handleSubmit, reload, isLoading, error } = useChat({
    api: '/api/prompt',
    initialInput: `Give me a list of ten tech conference talk topics focused on ${talkCategory}`,
  });
  const router = useRouter();

  const handleSelectTopic = (topic: string) => {
    dispatch(setTopic(topic));
    router.push('/dashboard/talks/create/abstract');
  };

  return (
    <PageWrapper>
      <Typography.Title>{t('SelectTopicPage.title')}</Typography.Title>
      <Typography.Paragraph>
        {t('SelectTopicPage.subtitle')}
      </Typography.Paragraph>
      {!!messages.length && !isLoading ? (
        <>
          <Typography.Paragraph>
            {t('SelectTopicPage.tryAgain')}
          </Typography.Paragraph>
          <Button onClick={() => reload()} loading={isLoading}>
            {t('SelectTopicPage.reload')}
          </Button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <Button htmlType="submit" loading={isLoading}>
            {t('SelectTopicPage.load')}
          </Button>
        </form>
      )}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <StyledList data-testid="topics-list">
          {messages
            .filter(message => message.role !== 'user')
            .map((m, index) => (
              <StyledListItem key={index}>
                <StyledList>
                  {m.content.split('\n').map(str => (
                    <StyledListItem key={str}>
                      <StyledSpan>{str}</StyledSpan>
                      <Button onClick={() => handleSelectTopic(str)}>
                        {t('SelectTopicPage.selectThisTopic')}
                      </Button>
                    </StyledListItem>
                  ))}
                </StyledList>
              </StyledListItem>
            ))}
        </StyledList>
      )}
      {error && <Typography.Paragraph>{error.message}</Typography.Paragraph>}
    </PageWrapper>
  );
};

const StyledList = styled.ul`
  margin-left: 0;
  padding-left: 0;
`;

const StyledListItem = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
`;

const StyledSpan = styled.span`
  margin-right: 8px;
`;

export default SelectTopicPage;
