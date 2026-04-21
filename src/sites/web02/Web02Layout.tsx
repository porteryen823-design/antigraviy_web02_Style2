import { Outlet } from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import './styles/web02.css';

const Web02Layout = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-accent-cyan/30 bg-primary-dark">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Web02Layout;
