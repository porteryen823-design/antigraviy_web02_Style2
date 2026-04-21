import { useState } from 'react';
import DemoToast from '../components/DemoToast';

const Rooms = () => {
  const [showToast, setShowToast] = useState(false);

  const handleDemo = () => setShowToast(true);

  const rooms = [
    {
      id: 1,
      name: '雲霧雙人房',
      description: '大面採光落地窗，讓雲海成為您早晨的第一道問候。',
      price: 'NT$ 4,800',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070',
      tags: ['雙人床', '山景露台', '浴缸'],
    },
    {
      id: 2,
      name: '林間豪華四人房',
      description: '寬敞的公共空間，適合家人與好友共享山林之聲。',
      price: 'NT$ 7,200',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070',
      tags: ['兩張雙人床', '客廳區', '森林景觀'],
    },
    {
      id: 3,
      name: '星空閣樓房',
      description: '天窗設計，夜晚躺在床上即可仰望滿天繁星。',
      price: 'NT$ 5,600',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2013',
      tags: ['景觀天窗', '加大雙人床', '星空視野'],
    },
  ];

  return (
    <div>
      <DemoToast visible={showToast} onClose={() => setShowToast(false)} />

      <section className="web01-page-hero">
        <h1>精選房型</h1>
        <p>每一間房，都是我們對精緻生活的堅持</p>
      </section>
      <section className="web01-section-alt">
        <div className="web01-container">
          <div className="web01-card-grid">
            {rooms.map((room) => (
              <div key={room.id} className="web01-card">
                <div className="web01-card-img-wrap">
                  <img src={room.image} alt={room.name} className="web01-card-img" />
                  <div className="web01-price-badge">{room.price} 起</div>
                </div>
                <div className="web01-card-body">
                  <div className="web01-card-tags">
                    {room.tags.map((tag) => (
                      <span key={tag} className="web01-card-tag">{tag}</span>
                    ))}
                  </div>
                  <h3 className="web01-card-title">{room.name}</h3>
                  <p className="web01-card-text">{room.description}</p>
                  <div className="web01-card-actions">
                    <button className="web01-room-btn-primary" onClick={handleDemo}>立即訂房</button>
                    <button className="web01-room-btn-secondary" onClick={handleDemo}>查看詳情</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
