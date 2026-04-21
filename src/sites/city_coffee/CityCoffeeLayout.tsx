import { Outlet } from 'react-router-dom';

const CityCoffeeLayout = () => {
  return (
    <div className="city-coffee-site" style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Outlet />
    </div>
  );
};

export default CityCoffeeLayout;
