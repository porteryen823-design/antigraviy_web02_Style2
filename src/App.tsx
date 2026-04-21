import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// === Hub ===
import HubPage from './HubPage';

// === web01 - 山林居民宿 ===
import Web01Layout from './sites/web01/Web01Layout';
const Web01Home = lazy(() => import('./sites/web01/pages/Home'));
const Web01Rooms = lazy(() => import('./sites/web01/pages/Rooms'));
const Web01Attractions = lazy(() => import('./sites/web01/pages/Attractions'));
const Web01Transport = lazy(() => import('./sites/web01/pages/Transport'));
const Web01FAQ = lazy(() => import('./sites/web01/pages/FAQ'));

// === web02 - Porter AI Tech v1 ===
import Web02Layout from './sites/web02/Web02Layout';
const Web02Home = lazy(() => import('./sites/web02/pages/Home'));
const Web02Services = lazy(() => import('./sites/web02/pages/Services'));
const Web02FAQ = lazy(() => import('./sites/web02/pages/FAQ'));
const Web02Contact = lazy(() => import('./sites/web02/pages/Contact'));

// === web02-style2 - Porter AI Studio ===
import Web02Style2Layout from './sites/web02style2/Web02Style2Layout';
const Web02S2Home = lazy(() => import('./sites/web02style2/pages/Home'));
const Web02S2Services = lazy(() => import('./sites/web02style2/pages/Services'));
const Web02S2FAQ = lazy(() => import('./sites/web02style2/pages/FAQ'));
const Web02S2Contact = lazy(() => import('./sites/web02style2/pages/Contact'));

// === city_coffee ===
import CityCoffeeLayout from './sites/city_coffee/CityCoffeeLayout';
const CityCoffeeHome = lazy(() => import('./sites/city_coffee/pages/Home'));

import CoffeeShopLayout from './sites/coffee_shop/CoffeeShopLayout';
const CoffeeShopHome = lazy(() => import('./sites/coffee_shop/pages/Home'));

// === Profile Landing ===
import ProfileLanding from './sites/profile/ProfileLanding';

const LoadingFallback = () => (
  <div style={{
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    height: '100vh', background: '#0a0e1a', color: '#00d9ff',
    fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.15em',
    fontSize: '0.875rem',
  }}>
    LOADING...
  </div>
);

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {/* Hub Entry */}
        <Route path="/" element={<HubPage />} />

        {/* web01 - 山林居民宿 */}
        <Route path="/web01" element={<Web01Layout />}>
          <Route index element={<Web01Home />} />
          <Route path="rooms" element={<Web01Rooms />} />
          <Route path="attractions" element={<Web01Attractions />} />
          <Route path="transport" element={<Web01Transport />} />
          <Route path="faq" element={<Web01FAQ />} />
        </Route>

        {/* web02 - Porter AI Tech */}
        <Route path="/web02" element={<Web02Layout />}>
          <Route index element={<Web02Home />} />
          <Route path="services" element={<Web02Services />} />
          <Route path="faq" element={<Web02FAQ />} />
          <Route path="contact" element={<Web02Contact />} />
        </Route>

        {/* web02-style2 - Porter AI Studio */}
        <Route path="/web02-style2" element={<Web02Style2Layout />}>
          <Route index element={<Web02S2Home />} />
          <Route path="services" element={<Web02S2Services />} />
          <Route path="faq" element={<Web02S2FAQ />} />
          <Route path="contact" element={<Web02S2Contact />} />
        </Route>

        {/* city_coffee */}
        <Route path="/city-coffee" element={<CityCoffeeLayout />}>
          <Route index element={<CityCoffeeHome />} />
        </Route>

        {/* coffee_shop */}
        <Route path="/coffee-shop" element={<CoffeeShopLayout />}>
          <Route index element={<CoffeeShopHome />} />
        </Route>

        {/* Profile */}
        <Route path="/profile" element={<ProfileLanding />} />
      </Routes>
    </Suspense>
  );
}

export default App;
