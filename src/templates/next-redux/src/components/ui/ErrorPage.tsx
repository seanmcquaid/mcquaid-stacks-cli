'use client';

import { Button, Typography } from 'antd';
import PageWrapper from './PageWrapper';

interface ErrorPageProps {
  reset: () => void;
  title?: string;
}

const ErrorPage = ({ reset, title }: ErrorPageProps) => {
  return (
    <PageWrapper>
      <Typography.Title>
        {title ? title : 'Something went wrong!'}
      </Typography.Title>
      <Button type="primary" onClick={reset} size="large">
        {'Try again'}
      </Button>
    </PageWrapper>
  );
};

export default ErrorPage;
