import { getAssetPath } from '../../../lib/assetPath';

const Home = () => {
  return (
    <iframe
      src={getAssetPath('/sites/coffee_shop/index.html')}
      style={{ width: '100%', height: '100vh', border: 'none' }}
      title="Essence Coffee"
    />
  );
};

export default Home;
