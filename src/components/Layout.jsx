import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className=" w-full h-full p-4 md:ml-[280px]">
      <Outlet />
    </div>
  );
};

export default Layout;
