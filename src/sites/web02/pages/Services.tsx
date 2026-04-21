import { motion } from 'framer-motion';
import {
  FaCommentDots, FaPaintBrush, FaCalendarAlt, FaServer,
  FaDatabase, FaRobot, FaProjectDiagram, FaLightbulb
} from 'react-icons/fa';

type Feature = string | { title: string; desc: string };

const services = [
  {
    id: 'line',
    icon: <FaCommentDots />,
    title: 'LINE 機器人開發',
    desc: '客製化 LINE 聊天機器人與 LIFF 應用開發，建立高效溝通管道。',
    longDesc: '包含 LINE 結合聊天機器人開發、LINE LIFF 網頁整合、自動化推播機制、以及與企業後端系統的深度對接。',
    features: [
      { title: 'LINE 服務整合', desc: '串接 Messaging API，讓 LINE 官方帳號具備自動回應、圖文選單、快速回覆等互動功能，輕鬆打造品牌專屬對話體驗。' },
      { title: 'LINE LIFF 開發', desc: '在 LINE 聊天室內嵌入自訂網頁，使用者不需跳出 LINE 就能完成表單填寫、預約查詢、付款等操作，大幅提升轉換率。' },
      { title: '自動化推播機制', desc: '依條件自動發送個人化訊息，例如訂單出貨通知、活動倒數提醒、定期報告，減少人工逐一發送的作業負擔。' },
      { title: '企業系統深度對接', desc: '與現有 ERP、MES、CRM 等系統整合，讓 LINE 成為員工與客戶即時取得企業資訊的入口，無需另開系統或 App。' },
    ],
    tech: 'Node.js, TypeScript, Messaging API, LIFF, AWS/GCP'
  },
  {
    id: 'web',
    icon: <FaPaintBrush />,
    title: '網頁設計',
    desc: '高品質企業形象網站與電商平台開發。',
    longDesc: '專注於使用者體驗 (UX) 與極速效能。使用最新的 Vite + Tailwind 技術棧，確保網站具備 SEO 優勢與流暢動畫。',
    features: [
      { title: '響應式設計 (RWD)', desc: '不論手機、平板或桌機，網站版面都能自動調整，確保每位訪客都有舒適的瀏覽體驗，不會因裝置不同而跑版。' },
      { title: '品牌視覺整合', desc: '根據品牌色系、字體與調性量身打造設計風格，從 Logo、配色到動畫細節全面統一，讓網站成為品牌形象的延伸。' },
      { title: '高效能電商架構', desc: '購物車、金流串接、庫存管理一體整合，搭配快取與 CDN 加速，即使面對促銷活動大量湧入也能穩定運行。' },
      { title: '無障礙設計規範', desc: '遵循 WCAG 無障礙標準，確保鍵盤操作、螢幕閱讀器皆可正常使用，同時有助於 Google 搜尋排名提升。' },
    ],
    tech: 'React/Vue, Tailwind CSS, Framer Motion'
  },
  {
    id: 'scheduling',
    icon: <FaCalendarAlt />,
    title: '排程系統',
    desc: '智能排程優化演算法，解決生產資源衝突。',
    longDesc: '針對複雜生產環境開發的智能排程引擎。支援有限產能計算、優先級權重與動態調整功能。',
    features: [
      { title: '遺傳演算法 (GA) 優化', desc: '模擬自然演化機制，從數千種排列組合中快速找出最佳生產順序，大幅縮短人工排班時間，同時降低換線與等待浪費。' },
      { title: '甘特圖視覺化', desc: '將所有工單、機台與人員的時間安排一目瞭然呈現在甘特圖上，管理者可直接拖曳調整，即時預覽變動影響。' },
      { title: '瓶頸資源自動識別', desc: '系統自動分析哪台機台或哪道工序是產能卡關點，並提供改善建議，協助管理者做出最有效的資源配置決策。' },
      { title: '即時重排模擬', desc: '遇到緊急插單、機台故障或料件延誤時，可立即模擬重新排程結果，評估不同方案的影響後再執行，降低決策風險。' },
    ],
    tech: 'Python, Node.js, Custom Optimization Engines'
  },
  {
    id: 'api',
    icon: <FaServer />,
    title: '多併發 WebAPI',
    desc: '高併發後端架構，支撐百萬級別數據請求。',
    longDesc: '為大規模應用設計的 RESTful/GraphQL API。具備限流、快取、負載平衡等企業級特性。',
    features: [
      { title: '高併發架構設計', desc: '採用非同步處理與連線池管理，讓 API 在大量用戶同時請求時仍能快速回應，避免因流量爆增導致系統當機。' },
      { title: 'OAuth 2.0 / JWT 安全', desc: '導入業界標準身份驗證機制，確保每筆 API 請求都經過嚴格授權驗證，有效防止未授權存取與資料外洩風險。' },
      { title: 'Redis 緩存優化', desc: '將高頻查詢結果暫存於記憶體快取，大幅減少資料庫查詢次數，API 回應速度可提升數倍，降低伺服器負擔。' },
      { title: '微服務架構轉型', desc: '將龐大的單體系統拆分為獨立可部署的小服務，各模組獨立開發、獨立擴展，出問題時不會牽連整個系統。' },
    ],
    tech: '.NET Web API, Fastify, Redis, RabbitMQ'
  },
  {
    id: 'db',
    icon: <FaDatabase />,
    title: '資料庫整合',
    desc: '跨系統數據同步與大規模數據倉儲建置。',
    longDesc: '協助企業整合散落在各處的數據庫。從 ETL 流程設計到即時 CDC 同步，確保數據的一致性與可用性。',
    features: [
      { title: 'ETL 數據流設計', desc: '將來自不同格式、不同系統的原始資料，經過清洗、轉換後統一匯入資料倉儲，讓報表與分析有可靠的數據基礎。' },
      { title: '多資料庫同步 (CDC)', desc: '利用變更資料捕獲技術，即時偵測來源資料庫的新增與修改，自動同步至目標系統，確保各端資料始終保持一致。' },
      { title: '資料庫效能優化', desc: '透過索引規劃、查詢改寫、分區策略等手段，讓原本跑好幾秒甚至幾分鐘的查詢縮短至毫秒級，直接改善系統體感速度。' },
      { title: '高可用架構佈署', desc: '建立主從備援與自動容錯切換機制，當主資料庫發生異常時能在數秒內自動接管，確保業務系統 24 小時不中斷運行。' },
    ],
    tech: 'PostgreSQL, MySQL, SQL Server, MongoDB'
  },
  {
    id: 'ai-rag',
    icon: <FaRobot />,
    title: 'AI RAG 系統 + 客服聊天機器人',
    desc: '企業專屬知識庫與智能客服解決方案。',
    longDesc: '結合 RAG (檢索增強生成) 技術與企業私有文件，建置精準的智能客服機器人，支援多管道佈署與即時問題解答。',
    features: [
      { title: '企業專屬知識庫', desc: '將公司內部的 SOP、產品手冊、FAQ、合約文件等資料向量化建檔，讓 AI 能精準搜尋並引用正確內容回答問題，而非胡亂捏造。' },
      { title: '智能客服聊天機器人', desc: '7×24 小時自動回應客戶詢問，能理解上下文、追問釐清需求，並在無法回答時自動轉接真人，大幅節省客服人力成本。' },
      { title: '多管道佈署對接', desc: '同一套 AI 知識庫可同時接入網站、LINE、Slack、Teams 等管道，員工與客戶在習慣的平台上就能直接取得解答。' },
      { title: '精準來源引用問答', desc: 'AI 回答每個問題時都會標註資料來源段落，讓使用者可以核查原文，避免「幻覺」錯誤，也讓管理者容易審核答案品質。' },
    ],
    tech: 'OpenAI, LangChain, ChromaDB, Python, Dify'
  },
  {
    id: 'workflow',
    icon: <FaProjectDiagram />,
    title: '工作流設計',
    desc: '直覺式可視化流程編輯與自動化審批。',
    longDesc: '為企業內部繁雜的審批流程提供數位化解決方案。支持動態路由、多級審閱與第三方 API 觸發。',
    features: [
      { title: '可視化流程編輯器', desc: '透過拖曳節點的方式設計業務流程，不需寫程式碼，業務人員也能自行調整審批步驟，大幅降低 IT 部門的維護負擔。' },
      { title: '審批流程自動化', desc: '請假、採購、報帳等日常審核單據自動依規則派送給對應主管，審批人只需在手機上點擊同意或退回，不再需要紙本傳閱。' },
      { title: '條件分支邏輯設定', desc: '依據金額、部門、申請類型等條件自動切換不同審批路徑，例如 10 萬以下主管核准、10 萬以上需董事會複核，規則彈性可調。' },
      { title: '任務期限提醒機制', desc: '當待辦任務超過預設時限仍未處理，系統自動寄送提醒通知給審批人及其上級，避免流程卡關、影響業務推進。' },
    ],
    tech: 'React Flow, Dify/n8n, Node.js'
  },
  {
    id: 'consulting',
    icon: <FaLightbulb />,
    title: '諮詢服務',
    desc: '數位轉型策略規劃與技術架構評估。',
    longDesc: '專家團隊協助您進行技術選型、架構診斷與數位化路線圖規劃，降低轉型風險。',
    features: [
      { title: '現況診斷與健檢', desc: '深入訪談與系統盤點，找出現有架構的效能瓶頸、安全漏洞與維護痛點，提供白紙黑字的診斷報告，讓問題有所依據。' },
      { title: '技術架構藍圖規劃', desc: '根據業務目標與預算規模，規劃最適合的技術選型與架構路徑，避免盲目跟風採用不適合的新技術，減少後續重做成本。' },
      { title: 'ROI 成本分析', desc: '協助量化各項技術投資的預期效益，用數字說明導入後能節省多少人力、減少多少錯誤、縮短多少流程時間，讓決策更有說服力。' },
      { title: '團隊開發規範輔導', desc: '建立程式碼審查、版本控制、部署流程等開發規範，並透過教育訓練讓團隊成員快速上手，確保專案品質長期維持穩定。' },
    ],
    tech: 'Expert Strategy & Technical Audit'
  }
];

const Services = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            className="text-5xl md:text-6xl font-orbitron font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            開發<span className="text-accent-cyan">領域</span>
          </motion.h1>
          <p className="text-soft-white/80 text-lg max-w-3xl mx-auto">
            我們提供多元且深入的技術解決方案，專為解決企業在數位轉型過程中的核心技術痛點。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {services.map((item, i) => (
            <motion.div
              key={item.id}
              className="tech-card h-full cursor-pointer group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              onClick={() => {
                document.getElementById(`detail-${item.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <div className="text-accent-cyan text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent-cyan transition-colors">{item.title}</h3>
              <p className="text-soft-white/70 text-sm leading-relaxed">{item.desc}</p>
              <div className="mt-4 text-accent-cyan/60 text-xs group-hover:text-accent-cyan transition-colors">了解更多 ↓</div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Service Section (Accordion-like or list) */}
        <div className="space-y-12">
          <h2 className="text-3xl font-orbitron font-bold text-white mb-12 flex items-center gap-4">
            <span className="w-12 h-0.5 bg-accent-cyan" /> 服務細節說明
          </h2>
          
          <div className="grid grid-cols-1 gap-8">
            {services.map((item, i) => (
              <motion.div
                key={`${item.id}-detail`}
                id={`detail-${item.id}`}
                className="glass-card p-8 md:p-12 flex flex-col lg:flex-row gap-12 scroll-mt-28"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="lg:w-1/3">
                  <div className="text-6xl text-accent-cyan/20 mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                  <div className="inline-block px-3 py-1 bg-accent-cyan/10 border border-accent-cyan/20 rounded text-accent-cyan text-xs font-mono mb-4">
                    技術棧: {item.tech}
                  </div>
                  <p className="text-soft-white/80 leading-relaxed mb-6">
                    {item.longDesc}
                  </p>
                </div>
                
                <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {item.features.map((feature: Feature, idx: number) => {
                    const isRich = typeof feature === 'object';
                    return (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/5 transition-colors hover:border-accent-cyan/30">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-accent-cyan shrink-0" />
                        <div>
                          <span className="text-soft-white font-medium">{isRich ? feature.title : feature}</span>
                          {isRich && <p className="text-steel-gray text-sm mt-1 leading-relaxed">{feature.desc}</p>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
