import { Loader } from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavStyle, LinkStyle } from './ShareLayout.styled';

const ShareLayout = () => {
  return (
    <div>
      <header>
        <NavStyle>
          <LinkStyle to="/">Home</LinkStyle>
          <LinkStyle to="/movies">Movie</LinkStyle>
        </NavStyle>
      </header>
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};

export default ShareLayout;
