import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className=" flex-1 p-4 ">
      <Outlet />
    </div>
  );
};

export default Layout;
