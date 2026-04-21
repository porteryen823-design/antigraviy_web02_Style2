import { useState } from 'react';
import { Link } from 'react-router-dom';
import DemoToast from '../components/DemoToast';

const Home = () => {
  const [showToast, setShowToast] = useState(false);

  const handleDemo = () => setShowToast(true);

  return (
    <div>
      <DemoToast visible={showToast} onClose={() => setShowToast(false)} />

      {/* Hero Section */}
      <section className="web01-hero">
        <div className="web01-hero-bg">
          <div className="web01-hero-overlay"></div>
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070"
            alt="Mountain Lodge Hero"
            className="web01-hero-img"
          />
        </div>

        <div className="web01-hero-content">
          <h1 className="web01-hero-title">山林居：南投深處的寧靜守候</h1>
          <p className="web01-hero-subtitle">
            暫時遠離塵囂，在山岳的懷抱中，找回那顆失落已久的心。
          </p>
          <Link to="/web01/rooms" className="web01-btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
            開啟您的旅程
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="web01-section-alt">
        <div className="web01-container">
          <div className="web01-two-col">
            <div>
              <span className="web01-label">民宿理念</span>
              <h2 className="web01-section-title">與山林共生，與星空共眠</h2>
              <p className="web01-text">
                山林居座落於南投群山之間，每一根原木、每一塊疊石，都傾訴著大地的故事。我們相信，建築不應是自然的隔閡，而是自然的延伸。在這裡，您可以聽見風穿過林梢，看見雲湧入山谷，體驗最純粹的有機生活。
              </p>
              <div className="web01-stats-grid">
                <div>
                  <div className="web01-stat-value">1,200 m</div>
                  <div className="web01-stat-label">海拔高度</div>
                </div>
                <div>
                  <div className="web01-stat-value">100%</div>
                  <div className="web01-stat-label">原木建築</div>
                </div>
              </div>
            </div>
            <div className="web01-img-frame">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070"
                alt="Mountain View"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Quick Link */}
      <section className="web01-section-dark">
        <div className="web01-container">
          <h2 className="web01-booking-heading">預約您的山間時光</h2>
          <div className="web01-booking-form">
            <div className="web01-form-group">
              <label>入住日期</label>
              <input type="date" />
            </div>
            <div className="web01-form-group">
              <label>退房日期</label>
              <input type="date" />
            </div>
            <div className="web01-form-group">
              <label>入住人數</label>
              <select>
                <option>2 位大人</option>
                <option>4 位大人</option>
                <option>家庭組合</option>
              </select>
            </div>
            <button className="web01-submit-btn" onClick={handleDemo}>
              立即查詢
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
