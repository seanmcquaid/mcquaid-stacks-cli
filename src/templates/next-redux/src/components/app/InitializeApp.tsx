'use client';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectIsInitialized } from '@/store/app/selectors';
import { setInitialized } from '@/store/app/slice';
import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import LoadingSpinner from '../ui/LoadingSpinner';

// This might be a good place to to pass in props from a server component with data from the server to initialize our client with.

const InitializeApp = ({ children }: PropsWithChildren) => {
  const dispatch = useAppDispatch();
  const isInitialized = useAppSelector(selectIsInitialized);

  useEffect(() => {
    if (!isInitialized) {
      dispatch(setInitialized());
    }
  }, [dispatch, isInitialized]);

  if (!isInitialized) {
    return <LoadingSpinner />;
  }

  return children;
};

export default InitializeApp;
