import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCommentDots, FaDesktop, FaCalendarAlt, FaServer, FaDatabase, FaBrain, FaNetworkWired, FaLightbulb } from 'react-icons/fa';

const services = [
  {
    id: 'line',
    title: 'LINE 機器人開發',
    icon: <FaCommentDots />,
    shortDesc: '客製化 LINE 聊天機器人與 LIFF 應用開發，建立高效溝通管道。',
    details: '包含 LINE 結合聊天機器人開發、LINE LIFF 網頁整合、自動化推播機制、以及與企業後端系統的深度對接。',
    tech: 'Node.js, TypeScript, Messaging API, LIFF, AWS/GCP',
    results: ['24/7 自動化客戶服務', '提升會員黏著度與互動率', '無縫串接多元應用場景']
  },
  {
    id: 'web',
    title: '網頁設計',
    icon: <FaDesktop />,
    shortDesc: '響應式企業形象網站與電商平台開發。',
    details: '提供 RWD 設計、品牌識別整合、性能優化、SEO 友善架構。',
    tech: 'Tailwind CSS, Framer Motion, Next.js',
    results: ['極速載入體驗', '完美適配行動裝置', '高轉化率導向設計']
  },
  {
    id: 'aps',
    title: '排程系統規劃',
    icon: <FaCalendarAlt />,
    shortDesc: '生產排程優化演算法，解決資源分配衝突。',
    details: '拖拉式排程介面、有限產能計算、遺傳演算法 (GA) 優化、即時重排程引擎。',
    tech: 'TypeScript, Python (Optimization), React Flow',
    results: ['資源利用率提升 25%', '訂單逾期率降低 50%', '自動化排程替代人工']
  },
  {
    id: 'api',
    title: '高併發 WebAPI',
    icon: <FaServer />,
    shortDesc: '穩定的後端架構，支援萬人同時在線。',
    details: 'RESTful/GraphQL API、微服務架構、非同步處理 (Message Queue)、API 網關與限流。',
    tech: '.NET Core, Node.js, Redis, RabbitMQ',
    results: ['10,000+ req/s 處理能力', 'P95 響應時間 < 100ms', 'OAuth 2.0 安全機制']
  },
  {
    id: 'db',
    title: '資料庫系統整合',
    icon: <FaDatabase />,
    shortDesc: '多樣化資料庫整合與 ETL 數據流設計。',
    details: '數據倉儲建置、即時同步機制、CDC (Change Data Capture)、大數據遷移。',
    tech: 'PostgreSQL, MySQL, InfluxDB, ETL tools',
    results: ['數據零遺失遷移', '跨平台數據共享', '毫秒級查詢優化']
  },
  {
    id: 'rag',
    title: 'AI RAG 系統 + 客服聊天機器人',
    icon: <FaBrain />,
    shortDesc: '企業專屬知識庫與智能客服解決方案。',
    details: '結合 RAG (檢索增強生成) 技術與企業私有文件，建置精準的智能客服機器人，支援多管道佈署與即時問題解答。',
    tech: 'OpenAI, LangChain, ChromaDB, Python, Dify',
    results: ['客服人力成本節省 60%', '回覆準確率達 95% 以上', '24/7 零延遲知識檢索']
  },
  {
    id: 'workflow',
    title: '工作流設計開發',
    icon: <FaNetworkWired />,
    shortDesc: '可視化流程引擎，自動化日常商務運作。',
    details: '審批流程設計、條件分支邏輯、可視化編輯器、各類系統整合 (Hook)。',
    tech: 'Dify, React Flow, n8n',
    results: ['流程數位化 100%', '文件簽核加速 5 倍', '異常流程自動預警']
  },
  {
    id: 'consult',
    title: '諮詢服務',
    icon: <FaLightbulb />,
    shortDesc: '數位轉型策略規劃與技術架構評估。',
    details: '系統效能調校、資安健檢、團隊技術培訓、ROI 分析報告。',
    tech: 'Professional Consulting Methodology',
    results: ['完整的技術藍圖', '明確的投資回報分析', '內部團隊技術升等']
  },
];

const Services = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="pt-24 pb-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">我們的服務項目</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            我們提供多元化的軟體解決方案，協助企業在數位浪潮中保持領先。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <motion.div
              key={s.id}
              layoutId={s.id}
              onClick={() => setActiveId(activeId === s.id ? null : s.id)}
              className={`cursor-pointer p-8 rounded-2xl transition-all ${
                activeId === s.id 
                  ? 'bg-primary text-white shadow-2xl col-span-1 md:col-span-2' 
                  : 'bg-white text-text-dark hover:shadow-lg border border-gray-100'
              }`}
            >
              <div className={`text-4xl mb-6 ${activeId === s.id ? 'text-secondary' : 'text-primary'}`}>
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className={`mb-6 ${activeId === s.id ? 'text-white/80' : 'text-gray-500'}`}>
                {s.shortDesc}
              </p>

              {activeId === s.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6 border-t border-white/20 pt-6"
                >
                  <div>
                    <h4 className="font-bold text-secondary mb-2">服務細節</h4>
                    <p className="text-sm opacity-90">{s.details}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-2">技術棧</h4>
                    <p className="text-sm font-mono opacity-90">{s.tech}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-2">預期成果</h4>
                    <ul className="list-disc list-inside text-sm opacity-90">
                      {s.results.map((r, i) => <li key={i}>{r}</li>)}
                    </ul>
                  </div>
                  <button className="bg-white text-primary px-6 py-2 rounded-lg font-bold text-sm">
                    瞭解更多
                  </button>
                </motion.div>
              )}
              
              {activeId !== s.id && (
                <div className="text-primary font-bold text-sm">瞭解詳情 →</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
