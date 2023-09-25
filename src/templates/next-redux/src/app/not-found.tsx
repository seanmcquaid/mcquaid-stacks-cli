'use client';
import useAppTranslation from '@/hooks/useAppTranslation';
import { Button, Layout, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const NotFoundPage = () => {
  const { t } = useAppTranslation();
  const router = useRouter();

  const onClick = () => {
    router.push('/');
  };

  return (
    <FullHeightLayout>
      <StyledContent>
        <Typography.Title>{t('NotFoundPage.title')}</Typography.Title>
        <Button onClick={onClick}>{'NotFoundPage.goHome'}</Button>
      </StyledContent>
    </FullHeightLayout>
  );
};

const FullHeightLayout = styled(Layout)`
  height: 100%;
  width: 100%;
`;

const StyledContent = styled(Layout.Content)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default NotFoundPage;
