'use client';
import NavigationCard from '@/components/ui/NavigationCard';
import PageWrapper from '@/components/ui/PageWrapper';
import useAppTranslation from '@/hooks/useAppTranslation';
import { Typography } from 'antd';

const Dashboard = () => {
  const { t } = useAppTranslation();

  return (
    <PageWrapper>
      <Typography.Title>{t('DashboardPage.title')}</Typography.Title>
      <NavigationCard
        title={t('DashboardPage.talksCardTitle')}
        route="/dashboard/talks"
        text={t('DashboardPage.talksCardInfo')}
      />
    </PageWrapper>
  );
};

export default Dashboard;
