import { getAssetPath } from '../../../lib/assetPath';

const Home = () => {
  return (
    <iframe
      src={getAssetPath('/sites/city_coffee/index.html')}
      style={{ width: '100%', height: '100vh', border: 'none' }}
      title="City Coffee"
    />
  );
};

export default Home;
