const Transport = () => {
  return (
    <div>
      <section className="web01-page-hero">
        <h1>交通資訊</h1>
        <p>如何到達隱身於山林的世外桃源</p>
      </section>
      <section className="web01-section-alt">
        <div className="web01-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{
                background: 'white', padding: '2rem', borderRadius: '1.5rem',
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)', border: '1px solid #F2E8C9'
              }}>
                <h3 className="web01-section-title" style={{ fontSize: '1.25rem', marginBottom: '1rem', textAlign: 'left' }}>
                  🚗 自行開車
                </h3>
                <p className="web01-text">
                  國道 3 號至霧峰系統轉國道 6 號，行駛至終點愛蘭交流道下，沿台 14 線往埔里/霧社方向，接台 14 甲線至某某公里處右轉。
                </p>
              </div>

              <div style={{
                background: 'white', padding: '2rem', borderRadius: '1.5rem',
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)', border: '1px solid #F2E8C9'
              }}>
                <h3 className="web01-section-title" style={{ fontSize: '1.25rem', marginBottom: '1rem', textAlign: 'left' }}>
                  🚌 大眾運輸
                </h3>
                <p className="web01-text">
                  搭乘高鐵至「台中烏日站」或台鐵至「台中站」，轉乘「南投客運（清境線）」至「某某站」下車，我們提供車站接駁服務（需提前 3 日預約）。
                </p>
              </div>

              <div style={{
                background: 'rgba(167,122,80,0.08)', padding: '2rem',
                borderRadius: '1.5rem', border: '1px solid rgba(167,122,80,0.2)'
              }}>
                <h4 style={{ fontWeight: 700, color: '#A77A50', marginBottom: '0.75rem' }}>⚠ 溫馨提醒</h4>
                <ul className="web01-footer-list" style={{ color: 'rgba(30,33,45,0.7)', gap: '0.75rem' }}>
                  <li>山區道路蜿蜒，請謹慎駕駛。</li>
                  <li>部分路段於夜間易有濃霧，建議於下午 4 點前抵達。</li>
                  <li>冬季山區溫差大，請備妥保暖衣物。</li>
                </ul>
              </div>
            </div>

            <div style={{
              minHeight: '450px', background: 'white', borderRadius: '1.5rem',
              overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
              border: '8px solid white', position: 'relative',
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.513337922484!2d121.15931617581372!3d24.048248401736633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468903c80ff1f17%3A0xe6bf4462199859f1!2zNTQ25Y2X5oqV57ij5LuB6Kej6YSJ5LuB5ZKM6LevMTcw6Jmf!5e0!3m2!1szh-TW!2stw!4v1713444000000!5m2!1szh-TW!2stw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - 山林居位置"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transport;
