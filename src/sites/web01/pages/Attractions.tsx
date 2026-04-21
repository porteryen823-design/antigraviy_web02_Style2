import sunMoonLakeImg from '../assets/images/sun_moon_lake.png';
import cingjingFarmImg from '../assets/images/cingjing_farm.png';
import hehuanshanImg from '../assets/images/hehuanshan.png';

const Attractions = () => {
  const spots = [
    {
      name: '日月潭',
      dist: '車程 45 分鐘',
      desc: '台灣最著名的淡水湖泊，無論是清晨的薄霧還是黃昏的夕照，都展現出東方水墨畫般的意境。',
      image: sunMoonLakeImg,
    },
    {
      name: '清境農場',
      dist: '車程 20 分鐘',
      desc: '漫步在青青草原上，與溫馴的綿羊近距離互動，享受如歐洲阿爾卑斯山般的遼闊山景。',
      image: cingjingFarmImg,
    },
    {
      name: '合歡山尖山步道',
      dist: '車程 60 分鐘',
      desc: '台灣百岳中最容易親近的一群，春夏觀賞高山杜鵑，秋冬挑戰賞雪探險。',
      image: hehuanshanImg,
    },
  ];

  return (
    <div>
      <section className="web01-page-hero">
        <h1>南投之美</h1>
        <p style={{ fontStyle: 'italic' }}>「山，始終在那裡，等待著您的到訪。」</p>
      </section>
      <section className="web01-section-alt">
        <div className="web01-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
            {spots.map((spot) => (
              <div key={spot.name} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '3rem',
                alignItems: 'center',
              }}>
                <div style={{
                  flex: 1, borderRadius: '1.5rem', overflow: 'hidden',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.2)', aspectRatio: '16/9', width: '100%'
                }}>
                  <img src={spot.image} alt={spot.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <h2 className="web01-section-title" style={{ marginBottom: 0 }}>{spot.name}</h2>
                    <span style={{
                      background: 'rgba(167,122,80,0.1)', color: '#A77A50',
                      padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700
                    }}>{spot.dist}</span>
                  </div>
                  <p className="web01-text">{spot.desc}</p>
                  <button style={{
                    background: 'none', border: 'none', color: '#386641', fontWeight: 700,
                    cursor: 'pointer', fontSize: '1rem', marginTop: '1rem', padding: 0
                  }}>探索更多 →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Attractions;
