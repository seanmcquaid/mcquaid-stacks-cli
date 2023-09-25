'use client';
import PageWrapper from '@/components/ui/PageWrapper';
import useAppTranslation from '@/hooks/useAppTranslation';
import { UserButton, useSession } from '@clerk/nextjs';
import { Button, Layout, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const { Header, Footer } = Layout;
const { Title, Paragraph } = Typography;

const Home = () => {
  const { t } = useAppTranslation();
  const { session } = useSession();
  const router = useRouter();

  return (
    <StyledLayout>
      <StyledHeader>
        {session ? (
          <UserButton />
        ) : (
          <Button type="link" onClick={() => router.push('/sign-in')}>
            {t('HomePage.signIn')}
          </Button>
        )}
      </StyledHeader>
      <PageWrapper isCentered>
        <TitleWrapper>
          <Title>{t('App.appName')}</Title>
          <Paragraph>{t('HomePage.subtitle')}</Paragraph>
        </TitleWrapper>
      </PageWrapper>
      <StyledFooter>
        {t('App.companyName', { year: new Date().getFullYear() })}
      </StyledFooter>
    </StyledLayout>
  );
};

const StyledLayout = styled(Layout)`
  height: 100%;
  width: 100%;
`;

const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledFooter = styled(Footer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleWrapper = styled.section``;

export default Home;
