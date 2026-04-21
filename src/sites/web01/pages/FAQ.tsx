import { useState } from 'react';

interface FaqItem {
  q: string;
  a: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showContact, setShowContact] = useState(false);

  const faqs: FaqItem[] = [
    {
      q: '如何辦理入住與退房手續？',
      a: '入住時間（Check-in）為下午 3:00 以後，退房時間（Check-out）為上午 11:00 以前。若需延遲退房，請洽櫃檯並依房型酌收費用。',
    },
    {
      q: '民宿是否提供餐點？',
      a: '所有住房皆包含「山林有機早餐」。晚餐部分可預約我們的私廚無菜單料理，或至附近車程 10 分鐘的特色餐廳用餐。',
    },
    {
      q: '可以攜帶寵物嗎？',
      a: '為了維護住宿品質與部分房客的過敏體質，目前僅特定房型支援寵物入住，請於訂房前事先告知並閱讀寵物入住守則。',
    },
    {
      q: '山區天氣如何，需要準備什麼？',
      a: '即便在夏季，山區早晚溫度亦較低（約 18-22 度），建議備妥薄外套。冬季則需準備厚大衣。',
    },
    {
      q: '退訂政策為何？',
      a: '於入住日 14 天前通知可全額退款（扣除手續費）；7-14 天內退款 50%；7 天內恕不退款，但可保留訂金 3 個月。',
    },
  ];

  return (
    <div>
      {/* Contact Modal */}
      {showContact && (
        <div className="web01-modal-overlay" onClick={() => setShowContact(false)}>
          <div className="web01-modal" onClick={(e) => e.stopPropagation()}>
            <div className="web01-modal-icon">📞</div>
            <p className="web01-modal-title">電話聯繫</p>
            <p className="web01-modal-phone">0936-891-502</p>
            <p className="web01-modal-contact">聯絡人：顏先生</p>
            <button className="web01-modal-close" onClick={() => setShowContact(false)}>
              關閉
            </button>
          </div>
        </div>
      )}

      <section className="web01-page-hero">
        <h1>常見問題</h1>
        <p>希望能解決您的疑慮，讓旅程更加順遂</p>
      </section>
      <section className="web01-section-alt">
        <div className="web01-container web01-faq-container">
          <div className="web01-faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="web01-faq-item">
                <button
                  className="web01-faq-question web01-faq-btn"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="web01-faq-q-text">{faq.q}</span>
                  <span className={`web01-faq-icon${openIndex === index ? ' open' : ''}`}>+</span>
                </button>
                {openIndex === index && (
                  <div className="web01-faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>

          <div className="web01-faq-contact-block">
            <h4 className="web01-faq-contact-title">還有其他疑問嗎？</h4>
            <p className="web01-faq-contact-text">
              歡迎直接來電或透過官方 LINE 與我們聯繫，我們將竭誠為您服務。
            </p>
            <button className="web01-btn-primary" onClick={() => setShowContact(true)}>
              撥打電話聯繫
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
