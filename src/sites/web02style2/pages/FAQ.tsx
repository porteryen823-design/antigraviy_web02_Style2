import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown, HiSearch } from 'react-icons/hi';

const faqCategories = [
  { id: 'service', name: '服務相關' },
  { id: 'tech', name: '技術支援' },
  { id: 'project', name: '項目合作' },
  { id: 'cost', name: '費用與時程' },
];

const faqs = [
  {
    category: 'service',
    q: '你們與其他軟體公司有什麼不同？',
    a: '我們專注於企業級解決方案，具備深厚的製造業與科技業經驗。我們不僅提供代碼，更提供完整的技術藍圖、系統擴展性設計，以及長期的技術支援與維護。',
  },
  {
    category: 'cost',
    q: '開發一個 MES 系統需要多久？',
    a: '依規模不同，小型專案約 2-3 個月，中型約 4-6 個月，大型跨廠區專案則需 6-12 個月。這包含了需求訪談、設計、開發、測試及上線階段。',
  },
  {
    category: 'tech',
    q: '支援哪些技術棧？',
    a: '我們精通 React/Vue.js (前端)、.NET Core/Node.js/Python (後端)、SQL/NoSQL (資料庫) 以及主流雲端服務 (Azure/AWS)。AI 方面則擅長 OpenAI 與 LangChain 整合。',
  },
  {
    category: 'project',
    q: '如何開始合作？',
    a: '您可以點擊「立即諮詢」填寫表單，我們會在 24 小時內聯繫。接著會進行需求訪談、技術提案及報價，最後進行簽約與開發啟動。',
  },
  {
    category: 'service',
    q: 'AI RAG 系統可以處理內部機密文檔嗎？',
    a: '是的。我們可以佈署在地端（On-premise）或私有雲，確保資料不出境。透過向量資料庫與權限管理，僅授權員工能存取特定資訊。',
  },
  // Add more from plan if needed
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('service');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(f => 
    (f.category === activeCategory) && 
    (f.q.toLowerCase().includes(searchTerm.toLowerCase()) || f.a.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="pt-32 pb-20 min-h-screen bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-text-dark mb-4 font-heading">常見問題</h1>
          <p className="text-gray-600">在這裡您可以找到關於我們服務與流程的快速解答。</p>
        </div>

        <div className="max-w-xl mx-auto mb-12 relative">
          <input
            type="text"
            placeholder="搜尋問題..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 pr-12"
          />
          <HiSearch className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Categories */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl p-4 shadow-sm space-y-2">
              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setExpandedIndex(null);
                  }}
                  className={`w-full text-left px-6 py-3 rounded-xl transition-all ${
                    activeCategory === cat.id 
                      ? 'bg-primary text-white shadow-md' 
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-primary/10 rounded-2xl border border-primary/10">
              <h4 className="font-bold text-primary mb-2">沒找到答案？</h4>
              <p className="text-sm text-gray-600 mb-4">歡迎直接與我們的工程師聯繫，獲取專業諮詢。</p>
              <a href="/web02-style2/contact" className="text-primary font-bold hover:underline">聯繫我們 →</a>
            </div>
          </div>

          {/* Question List */}
          <div className="lg:w-3/4 space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-bold text-text-dark">{faq.q}</span>
                    <HiChevronDown 
                      className={`text-2xl text-gray-400 transition-transform ${expandedIndex === index ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center text-gray-400 border border-dashed">
                找不到相關問題，請嘗試更換關鍵字。
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
