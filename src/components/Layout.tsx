import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className=" flex flex-col gap-8 h-screen relative w-full">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
