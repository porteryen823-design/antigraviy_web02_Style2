import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus, HiMinus, HiSearch, HiMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const faqs = [
  {
    category: '服務相關',
    questions: [
      {
        q: '你們與其他軟體公司有什麼不同?',
        a: '我們專注於企業級解決方案,具備深厚的製造業與科技業經驗、全棧技術能力,並重視系統的穩定性、可擴展性與長期技術支援。'
      },
      {
        q: '開發一個 MES 系統需要多久?',
        a: '依規模不同: 小型(單產線) 2-3 個月; 中型(多產線) 4-6 個月; 大型(跨廠區) 6-12 個月。包含需求訪談、設計、開發、測試與上線。'
      }
    ]
  },
  {
    category: '技術與安全',
    questions: [
      {
        q: '支援哪些技術棧?',
        a: '前端: React, Vue, Tailwind; 後端: .NET Core, Node.js, Python; 資料庫: SQL Server, PostgreSQL, MongoDB; AI: OpenAI, LangChain 等。'
      },
      {
        q: '如何確保系統安全性?',
        a: '我們採用多層次安全策略,包括 HTTPS 加密、OAuth 2.0/JWT 驗證、SQL Injection 防護、定期安全掃描與完善的備份機制。'
      }
    ]
  },
  {
    category: '合作與維護',
    questions: [
      {
        q: '提供哪些售後服務?',
        a: '包括 3-6 個月的免費保固、緊急 Bug 修復 24 小時內響應、定期功能更新與年度維護合約選購。'
      },
      {
        q: 'AI RAG 系統適合我們公司嗎?',
        a: '如果您有大量內部技術文檔、需要智能客服或知識傳承系統,則非常適合。我們建議先進行 2-4 週的 POC 驗證。'
      },
      {
        q: '如何開始合作?',
        a: '流程包括: 1.聯繫我們 -> 2.需求訪談 -> 3.提案報價 -> 4.簽約 -> 5.啟動開發 -> 6.交付上線。'
      }
    ]
  }
];

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-accent-cyan' : 'text-soft-white group-hover:text-accent-cyan'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 w-6 h-6 flex items-center justify-center rounded-full border transition-all ${isOpen ? 'bg-accent-cyan border-accent-cyan text-primary-dark rotate-0' : 'border-steel-gray text-steel-gray'}`}>
          {isOpen ? <HiMinus /> : <HiPlus />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pb-6 text-soft-white/70 leading-relaxed border-l-2 border-accent-cyan/30 pl-4 ml-1">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('全部');

  const categories = ['全部', ...faqs.map(f => f.category)];

  const filteredFaqs = faqs.map(cat => ({
    ...cat,
    questions: cat.questions.filter(q => 
      (q.q.includes(searchTerm) || q.a.includes(searchTerm)) && 
      (activeCategory === '全部' || cat.category === activeCategory)
    )
  })).filter(cat => cat.questions.length > 0);

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl font-orbitron font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            常見<span className="text-accent-cyan">問題</span>
          </motion.h1>
          <p className="text-soft-white/80 text-lg max-w-2xl mx-auto mb-12">
            為您解答關於軟體開發、項目合作與售後保障的常見疑問。
          </p>

          <div className="max-w-xl mx-auto relative group">
            <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-steel-gray text-xl group-focus-within:text-accent-cyan transition-colors" />
            <input
              type="text"
              placeholder="搜尋您的問題..."
              className="w-full bg-secondary-dark border border-white/10 rounded-full py-4 pl-12 pr-6 text-soft-white outline-none focus:border-accent-cyan transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Categories Sidebar */}
          <div className="lg:w-1/4">
            <div className="glass-card p-6 sticky top-32">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <span className="w-1 h-4 bg-accent-cyan rounded-full" />
                目錄分類
              </h3>
              <div className="flex flex-col gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-left px-4 py-3 rounded-lg transition-all ${activeCategory === cat ? 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20' : 'text-steel-gray hover:bg-white/5'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:w-3/4">
            <div className="space-y-12">
              {filteredFaqs.length > 0 ? filteredFaqs.map(cat => (
                <div key={cat.category}>
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent-cyan rounded-full" />
                    {cat.category}
                  </h2>
                  <div className="glass-card px-8">
                    {cat.questions.map((q, i) => (
                      <FAQItem key={i} question={q.q} answer={q.a} />
                    ))}
                  </div>
                </div>
              )) : (
                <div className="text-center py-20 text-steel-gray">
                   找不到符合您的關鍵字的問題。
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="mt-16 bg-gradient-to-br from-accent-cyan/10 to-transparent p-8 rounded-2xl border border-accent-cyan/20 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">沒找到您的答案？</h4>
                <p className="text-steel-gray">我們的專家團隊隨時準備為您詳細說明。</p>
              </div>
              <Link to="/web02/contact" className="btn-primary flex items-center gap-2">
                <HiMail /> 聯繫技術顧問
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
