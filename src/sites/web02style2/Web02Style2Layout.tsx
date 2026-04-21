import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const Web02Style2Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-secondary text-text-dark">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Web02Style2Layout;
