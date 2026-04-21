import { Outlet } from 'react-router-dom';

const CoffeeShopLayout = () => {
  return (
    <div className="coffee-shop-site" style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Outlet />
    </div>
  );
};

export default CoffeeShopLayout;
