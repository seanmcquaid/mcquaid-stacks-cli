'use client';
import PageWrapper from '@/components/ui/PageWrapper';
import { DesktopOutlined } from '@ant-design/icons';
import { UserButton } from '@clerk/nextjs';
import { Layout, theme, Menu } from 'antd';
import { useRouter } from 'next/navigation';
import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

const { Header, Sider } = Layout;

const DashboardLayout = ({ children }: PropsWithChildren) => {
  const {
    token: { colorBgLayout },
  } = theme.useToken();
  const router = useRouter();

  const handleClickItem = ({ key }: { key: string }) => {
    router.push(key);
  };

  return (
    <StyledLayout hasSider>
      <Sider breakpoint="md">
        <UserButtonWrapper>
          <UserButton afterSignOutUrl="/" />
        </UserButtonWrapper>
        <Menu
          theme="dark"
          mode="inline"
          items={[
            {
              label: 'Dashboard',
              key: '/dashboard',
              icon: <DesktopOutlined />,
            },
          ]}
          onClick={handleClickItem}
        />
      </Sider>
      <StyledLayout>
        <Header style={{ padding: 0, background: colorBgLayout }} />
        <PageWrapper>{children}</PageWrapper>
      </StyledLayout>
    </StyledLayout>
  );
};

const StyledLayout = styled(Layout)`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`;

const UserButtonWrapper = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
`;

export default DashboardLayout;
