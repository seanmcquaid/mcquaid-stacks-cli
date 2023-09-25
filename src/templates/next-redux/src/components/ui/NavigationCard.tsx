'use client';
import { Card, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

interface NavigationCardProps {
  title: string;
  route: string;
  text?: string;
}

const NavigationCard = ({ title, route, text }: NavigationCardProps) => {
  const router = useRouter();
  return (
    <StyledCard title={title} size="default" onClick={() => router.push(route)}>
      {text && <Typography.Paragraph>{text}</Typography.Paragraph>}
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  cursor: pointer;
`;

export default NavigationCard;
