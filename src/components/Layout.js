import { Outlet } from 'react-router-dom';
import { Header } from './AppBar/AppBar';
import { Suspense } from 'react';
import {  Container } from '@mui/material';

export const Layout = () => {
  return (
    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
