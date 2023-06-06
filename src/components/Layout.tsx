import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { Container } from '@mantine/core';

const Layout = () => {
  return (
    <div className=" flex flex-col gap-8 h-screen relative w-full">
      <Navbar />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  );
};

export default Layout;
