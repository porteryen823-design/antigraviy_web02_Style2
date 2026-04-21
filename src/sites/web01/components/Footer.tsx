import { useState } from 'react';
import DemoToast from './DemoToast';

const Footer = () => {
  const [showToast, setShowToast] = useState(false);

  const handleDemo = () => setShowToast(true);

  return (
    <footer className="web01-footer">
      <DemoToast visible={showToast} onClose={() => setShowToast(false)} />
      <div className="web01-footer-inner">
        <div className="web01-footer-grid">
          <div>
            <h3 className="web01-footer-brand">山林居</h3>
            <p className="web01-footer-desc">
              在南投的雲霧繚繞中，與自然共處的最佳避風港。我們致力於提供最純粹、最放鬆的住宿體驗。
            </p>
          </div>
          <div>
            <h4 className="web01-footer-title">聯絡資訊</h4>
            <ul className="web01-footer-list">
              <li>地址：南投縣仁愛鄉大同村仁和路170號</li>
              <li>電話：0936891502</li>
              <li>信箱：porteryen@gmail.com</li>
            </ul>
          </div>
          <div>
            <h4 className="web01-footer-title">關注我們</h4>
            <div className="web01-footer-social">
              <button className="web01-footer-social-link" onClick={handleDemo}>Facebook</button>
              <button className="web01-footer-social-link" onClick={handleDemo}>Instagram</button>
              <button className="web01-footer-social-link" onClick={handleDemo}>LINE</button>
            </div>
          </div>
        </div>
        <div className="web01-footer-bottom">
          <p>© 2026 山林居. 版權所有.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
