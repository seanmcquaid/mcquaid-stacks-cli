'use client';
import { Spin } from 'antd';
import styled from 'styled-components';

const LoadingSpinner = () => {
  return (
    <LoadingSpinnerWrapper data-testid="loading-spinner">
      <Spin size="large" />
    </LoadingSpinnerWrapper>
  );
};

const LoadingSpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default LoadingSpinner;
