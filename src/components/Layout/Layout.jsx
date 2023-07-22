import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppNav } from 'components/AppNav/AppNav';
import { Wrapper } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <Wrapper>
      <AppNav />{' '}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};