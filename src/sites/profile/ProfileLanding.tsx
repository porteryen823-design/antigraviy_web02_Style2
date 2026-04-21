import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAssetPath } from '../../lib/assetPath';

/* ── Design tokens ── */
const C = {
  bg:      '#1A1C23',
  bgAlt:   '#1F222B',
  accent:  '#A77A50',
  text:    '#E0D8CB',
  muted:   '#8E9196',
  border:  'rgba(167, 122, 80, 0.15)',
  white:   '#FFFFFF',
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: 'easeOut', delay },
});

/* ── Data ── */
const services = [
  {
    icon: '🏗️',
    title: '系統架構設計',
    desc: '提供高並發、高穩定性之分散式架構與微服務佈局，為企業核心業務注入強健的技術靈魂。',
    points: ['微服務 & 事件驅動架構', '高可用 Kubernetes 叢集', 'API Gateway / Service Mesh', '效能瓶頸診斷與優化'],
  },
  {
    icon: '💻',
    title: '軟體開發設計',
    desc: '專注於客製化軟體開發、AI 創新應用與 LINE LIFF 輕量化設計，精確滿足多變的商業場景。',
    points: ['MES / ERP 企業核心系統', 'LINE LIFF 輕應用整合', '工業通訊協定 (OPC-UA / MQTT)', '全端 SaaS 平台開發'],
  },
  {
    icon: '🤖',
    title: 'AI 顧問服務',
    desc: '深入導入大語言模型與 RAG 技術，為您的企業量身打造專屬的 AI 智慧應用與自動化流程。',
    points: ['企業知識庫 RAG 架構', 'LLM Prompt Engineering', 'AI Agent 工作流設計', '模型微調與評估'],
  },
  {
    icon: '🎨',
    title: '網頁開發與設計',
    desc: '具備前後端全棧開發能力，精通 Vue、React 等現代框架，結合穩定的 Web API，提供兼具美學與效能的數位展示平台。',
    points: ['React / Vue 前端開發', 'RESTful & GraphQL API', 'UI/UX 設計系統建立', '網站效能優化 (Core Web Vitals)'],
  },
];

const timeline = [
  {
    year: '1995',
    title: '工業自動化起步',
    desc: '投入製造業自動化領域，深耕 PLC 程式設計與底層通訊協定（RS-232、RS-485、Modbus），奠定硬體軟體整合的扎實基礎。',
  },
  {
    year: '2002',
    title: 'MES 系統深耕',
    desc: '主導多家電子大廠製造執行系統（MES）核心模組開發，整合生產排程、品質追溯、設備聯網，深刻理解工廠數位化需求。',
  },
  {
    year: '2010',
    title: '企業數位轉型導入',
    desc: '跨入 ERP 整合與雲端架構設計，協助傳統製造企業完成資訊化轉型，建立跨廠區資料治理與 BI 決策分析平台。',
  },
  {
    year: '2016',
    title: '現代全棧技術轉型',
    desc: '擁抱 React、Vue.js、TypeScript 等現代前端生態，搭配 Node.js / .NET Core 後端，打造高互動性數位產品，服務範疇延伸至 B2C 市場。',
  },
  {
    year: '2021',
    title: 'AI 技術規模化應用',
    desc: '率先導入 LLM + RAG 技術至企業知識管理，建立多個 AI Agent 自動化工作流，協助客戶大幅降低人力重複作業成本。',
  },
  {
    year: '2024',
    title: 'AI 原生架構新時代',
    desc: '以 AI-first 思維重新設計系統架構，整合向量資料庫、語意搜尋、多模態模型，持續探索人機協作的邊界。',
  },
];

const techStack = [
  { category: '語言', items: ['Python', 'TypeScript', 'C#', 'C / C++', 'Java'] },
  { category: '前端', items: ['React', 'Vue.js', 'Vite', 'Tailwind CSS', 'Framer Motion'] },
  { category: '後端', items: ['Node.js', '.NET Core', 'FastAPI', 'GraphQL', 'REST API'] },
  { category: 'AI / ML', items: ['LangChain', 'OpenAI API', 'RAG 架構', 'Ollama', 'Prompt Engineering'] },
  { category: '基礎設施', items: ['Docker', 'Kubernetes', 'Azure', 'CI/CD', 'PostgreSQL'] },
  { category: '工業通訊', items: ['OPC-UA', 'MQTT', 'Modbus', 'PROFINET', 'PLC 整合'] },
];

const portfolio = [
  {
    title: '智慧製造 MES 重建計畫',
    tag: '製造業・系統架構',
    year: '2022',
    desc: '主導某上市電子製造商舊有 MES 全面重構，從單體式架構遷移至微服務架構，整合 30+ 台設備 OPC-UA 即時資料流，生產可視化即時率從 62% 提升至 98%。',
    highlights: ['微服務重構', 'OPC-UA 整合', '即時儀表板', 'Kubernetes 部署'],
  },
  {
    title: '企業 AI 知識管理平台',
    tag: 'AI 應用・RAG 架構',
    year: '2023',
    desc: '為中型製造集團建立內部知識庫問答系統，採用 RAG 架構整合 5,000+ 份技術文件，搭配 LLM 語意理解，使工程師查詢效率提升 70%，文件使用率大幅提高。',
    highlights: ['RAG 向量搜尋', 'LLM 問答引擎', 'Azure OpenAI', '多語系支援'],
  },
  {
    title: '供應鏈可視化監控平台',
    tag: '全棧開發・數位轉型',
    year: '2023',
    desc: '以 React + FastAPI 建構跨 8 廠區的供應鏈即時監控平台，整合 ERP、WMS 與 MES 資料，提供管理層即時庫存水位、交期預警與異常告警推播。',
    highlights: ['React 前端', 'FastAPI 後端', 'LINE 告警推播', '多廠區整合'],
  },
];

/* ── Component ── */
const ProfileLanding = () => {
  return (
    <div style={{
      background: C.bg,
      color: C.text,
      minHeight: '100vh',
      fontFamily: "'Noto Serif TC', serif",
      lineHeight: 1.8,
      overflowX: 'hidden',
    }}>

      {/* ── 導覽列 ── */}
      <nav style={{
        padding: '1.2rem 4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        width: '100%',
        boxSizing: 'border-box',
        zIndex: 100,
        background: 'rgba(26, 28, 35, 0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${C.border}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <img
            src={getAssetPath('/sites/profile/porter_avatar.png')}
            alt="Porter"
            style={{
              width: '48px', height: '48px',
              borderRadius: '50%',
              border: `1px solid ${C.accent}`,
              padding: '3px',
              filter: 'grayscale(30%)',
            }}
          />
          <span style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '2px', color: C.accent }}>
            PORTER × DESIGN
          </span>
        </div>
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {[['#about', '關於我'], ['#services', '服務'], ['#portfolio', '作品'], ['#contact', '聯絡']].map(([href, label]) => (
            <a key={href} href={href} style={{ color: C.muted, textDecoration: 'none', fontSize: '0.875rem', letterSpacing: '1px', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = C.accent)}
              onMouseLeave={e => (e.currentTarget.style.color = C.muted)}>
              {label}
            </a>
          ))}
          <Link to="/" style={{ color: C.accent, textDecoration: 'none', fontSize: '0.85rem', borderBottom: `1px solid ${C.accent}`, paddingBottom: '2px' }}>
            回到入口
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{
        height: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        padding: '0 2rem',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.08,
          background: 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")',
        }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{ position: 'relative', zIndex: 10, maxWidth: '800px' }}
        >
          <span style={{ color: C.accent, fontSize: '0.9rem', letterSpacing: '5px', textTransform: 'uppercase', display: 'block', marginBottom: '1.5rem' }}>
            淬取三十載技術光陰
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 7vw, 3.8rem)', fontWeight: 400, lineHeight: 1.35, color: C.white, margin: 0 }}>
            跨越時代的技術力量<br />
            <span style={{ color: C.accent }}>從工業自動化到 AI 創新設計</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#A0A3A7', margin: '2.5rem auto', maxWidth: '680px' }}>
            這不是一段單純的編程旅程，而是一場對「穩定」與「創新」的長久追求。<br />
            從底層通訊的紮實根基，到 AI 時代的高層架構設計，<br />
            我將數位技術轉化為具備人文溫度的轉型力量。
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '3.5rem', flexWrap: 'wrap' }}>
            <a href="#about" style={{ color: C.white, textDecoration: 'none', background: C.accent, padding: '0.9rem 2.5rem', borderRadius: '2px', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '1px' }}>
              認識我
            </a>
            <a href="#services" style={{ color: C.accent, textDecoration: 'none', border: `1px solid ${C.accent}`, padding: '0.9rem 2.5rem', borderRadius: '2px', fontSize: '0.9rem', letterSpacing: '1px' }}>
              探索服務
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── 關於我 ── */}
      <section id="about" style={{ padding: '10rem 2rem', background: C.bgAlt }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* 標題 */}
          <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <span style={{ color: C.accent, fontSize: '0.8rem', letterSpacing: '5px', textTransform: 'uppercase' }}>ABOUT</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 300, color: C.white, marginTop: '1rem' }}>關於我</h2>
            <div style={{ width: '40px', height: '1px', background: C.accent, margin: '1.5rem auto 0' }} />
          </motion.div>

          {/* 照片 + 文字 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,2fr)', gap: '5rem', alignItems: 'center' }}>
            <motion.div {...fadeUp(0.1)}>
              <img
                src={getAssetPath('/sites/profile/porter_avatar.png')}
                alt="Porter"
                style={{ width: '100%', maxWidth: '320px', borderRadius: '4px', border: `1px solid ${C.border}`, filter: 'grayscale(20%)', display: 'block' }}
              />
            </motion.div>
            <motion.div {...fadeUp(0.2)}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 300, color: C.white, marginBottom: '0.5rem' }}>顏先生 Porter Yen</h3>
              <p style={{ color: C.accent, fontSize: '0.85rem', letterSpacing: '3px', marginBottom: '2rem', textTransform: 'uppercase' }}>資深軟體架構師 · 30+ 年實踐者</p>
              <p style={{ color: C.muted, marginBottom: '1.2rem', fontSize: '1rem' }}>
                從 1995 年踏入工業自動化領域，歷經製造業 MES 系統、企業數位轉型、現代全棧開發，到今日 AI 原生架構設計，我的技術視野橫跨三個世代。
              </p>
              <p style={{ color: C.muted, marginBottom: '2.5rem', fontSize: '1rem' }}>
                我相信優秀的系統不只追求「跑得動」，更要追求「活得久」——易於維護、易於擴展、易於理解。這是我每一個專案的設計哲學。
              </p>
              {/* 關鍵數字 */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', borderTop: `1px solid ${C.border}`, paddingTop: '2rem' }}>
                {[['30+', '年從業經驗'], ['50+', '企業服務案例'], ['100+', '系統建置數量']].map(([num, label]) => (
                  <div key={label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 700, color: C.accent }}>{num}</div>
                    <div style={{ fontSize: '0.8rem', color: C.muted, letterSpacing: '1px', marginTop: '0.25rem' }}>{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 職涯時間軸 ── */}
      <section style={{ padding: '10rem 2rem', background: C.bg }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <span style={{ color: C.accent, fontSize: '0.8rem', letterSpacing: '5px', textTransform: 'uppercase' }}>JOURNEY</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 300, color: C.white, marginTop: '1rem' }}>技術旅程</h2>
            <div style={{ width: '40px', height: '1px', background: C.accent, margin: '1.5rem auto 0' }} />
          </motion.div>

          <div style={{ position: 'relative', paddingLeft: '3rem' }}>
            {/* 垂直軸線 */}
            <div style={{ position: 'absolute', left: '0.75rem', top: 0, bottom: 0, width: '1px', background: C.border }} />

            {timeline.map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} style={{ position: 'relative', marginBottom: '3.5rem' }}>
                {/* 圓點 */}
                <div style={{
                  position: 'absolute', left: '-2.35rem', top: '0.35rem',
                  width: '12px', height: '12px', borderRadius: '50%',
                  background: C.accent, border: `2px solid ${C.bg}`,
                  boxShadow: `0 0 0 3px ${C.border}`,
                }} />
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                  <span style={{ color: C.accent, fontSize: '0.85rem', fontWeight: 700, letterSpacing: '2px', flexShrink: 0 }}>{item.year}</span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: C.white, margin: 0 }}>{item.title}</h3>
                </div>
                <p style={{ color: C.muted, fontSize: '0.95rem', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 核心服務 ── */}
      <section id="services" style={{ padding: '10rem 2rem', background: C.bgAlt }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <span style={{ color: C.accent, fontSize: '0.8rem', letterSpacing: '5px', textTransform: 'uppercase' }}>SERVICES</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 300, color: C.white, marginTop: '1rem' }}>核心服務項目</h2>
            <div style={{ width: '40px', height: '1px', background: C.accent, margin: '1.5rem auto 0' }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {services.map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.12)}
                style={{
                  padding: '2.5rem',
                  border: `1px solid ${C.border}`,
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: '2px',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '1.5rem', opacity: 0.85 }}>{s.icon}</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 400, color: C.accent, marginBottom: '1rem' }}>{s.title}</h3>
                <p style={{ color: C.muted, fontSize: '0.95rem', marginBottom: '1.75rem', lineHeight: 1.75 }}>{s.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {s.points.map((pt) => (
                    <li key={pt} style={{ fontSize: '0.85rem', color: '#6E7175', paddingLeft: '1rem', position: 'relative', marginBottom: '0.4rem' }}>
                      <span style={{ position: 'absolute', left: 0, color: C.accent }}>·</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 技術棧 ── */}
      <section style={{ padding: '10rem 2rem', background: C.bg }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <span style={{ color: C.accent, fontSize: '0.8rem', letterSpacing: '5px', textTransform: 'uppercase' }}>TECH STACK</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 300, color: C.white, marginTop: '1rem' }}>技術專長</h2>
            <div style={{ width: '40px', height: '1px', background: C.accent, margin: '1.5rem auto 0' }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {techStack.map((group, i) => (
              <motion.div key={group.category} {...fadeUp(i * 0.08)}>
                <h4 style={{ fontSize: '0.75rem', letterSpacing: '4px', textTransform: 'uppercase', color: C.accent, marginBottom: '1.25rem' }}>
                  {group.category}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {group.items.map((tech) => (
                    <span key={tech} style={{
                      fontSize: '0.8rem',
                      color: C.text,
                      border: `1px solid ${C.border}`,
                      padding: '0.3rem 0.9rem',
                      borderRadius: '1px',
                      background: 'rgba(167,122,80,0.04)',
                      letterSpacing: '0.5px',
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 精選作品 ── */}
      <section id="portfolio" style={{ padding: '10rem 2rem', background: C.bgAlt }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <span style={{ color: C.accent, fontSize: '0.8rem', letterSpacing: '5px', textTransform: 'uppercase' }}>PORTFOLIO</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 300, color: C.white, marginTop: '1rem' }}>精選作品</h2>
            <div style={{ width: '40px', height: '1px', background: C.accent, margin: '1.5rem auto 0' }} />
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {portfolio.map((p, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: '3rem',
                  padding: '3rem',
                  border: `1px solid ${C.border}`,
                  background: 'rgba(255,255,255,0.015)',
                  alignItems: 'start',
                }}
              >
                {/* 年份徽章 */}
                <div style={{ textAlign: 'center', paddingTop: '0.25rem' }}>
                  <div style={{ fontSize: '0.75rem', color: C.accent, letterSpacing: '2px', fontWeight: 700 }}>{p.year}</div>
                  <div style={{ width: '1px', height: '3rem', background: C.border, margin: '0.75rem auto 0' }} />
                </div>
                {/* 內容 */}
                <div>
                  <div style={{ fontSize: '0.75rem', color: C.muted, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                    {p.tag}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 400, color: C.white, marginBottom: '1rem' }}>{p.title}</h3>
                  <p style={{ color: C.muted, fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>{p.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {p.highlights.map((h) => (
                      <span key={h} style={{
                        fontSize: '0.75rem',
                        color: C.accent,
                        border: `1px solid rgba(167,122,80,0.3)`,
                        padding: '0.2rem 0.75rem',
                        borderRadius: '1px',
                        background: 'rgba(167,122,80,0.06)',
                      }}>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 聯絡區塊 ── */}
      <section id="contact" style={{ padding: '10rem 2rem', textAlign: 'center', background: C.bg }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div {...fadeUp()}>
            <span style={{ color: C.accent, fontSize: '0.8rem', letterSpacing: '5px', textTransform: 'uppercase' }}>CONTACT</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 300, color: C.white, marginTop: '1rem', marginBottom: '1rem' }}>與我對話</h2>
            <p style={{ color: C.muted, fontSize: '0.95rem', marginBottom: '4rem' }}>
              無論是新專案洽談、技術顧問合作，或只是想交流想法，歡迎隨時聯繫。
            </p>
          </motion.div>
          <motion.div
            {...fadeUp(0.15)}
            style={{
              padding: '5rem 3rem',
              border: `1px solid ${C.border}`,
              background: 'url("https://www.transparenttextures.com/patterns/felt.png")',
              position: 'relative',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '3.5rem', textAlign: 'left' }}>
              {[
                ['📍 地址', '新竹市東區公園路 142 號'],
                ['📞 諮詢專線', '0936-891-502'],
                ['📧 Email', 'porter.yen@gyro.com.tw'],
                ['🕐 服務時間', '週一至週五 09:00–18:00'],
              ].map(([label, value]) => (
                <div key={label}>
                  <div style={{ fontSize: '0.75rem', color: C.accent, letterSpacing: '2px', marginBottom: '0.5rem' }}>{label}</div>
                  <div style={{ color: C.text, fontSize: '0.95rem' }}>{value}</div>
                </div>
              ))}
            </div>
            <a
              href="mailto:porter.yen@gyro.com.tw"
              style={{
                background: C.accent, color: C.bg,
                padding: '1.1rem 3.5rem',
                textDecoration: 'none',
                fontWeight: 700,
                display: 'inline-block',
                letterSpacing: '1px',
                fontSize: '0.9rem',
              }}
            >
              啟動數位轉型方案
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── 頁尾 ── */}
      <footer style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        borderTop: `1px solid rgba(167,122,80,0.06)`,
        color: 'rgba(224,216,203,0.3)',
        fontSize: '0.8rem',
        letterSpacing: '1px',
      }}>
        <p style={{ marginBottom: '0.5rem' }}>© {new Date().getFullYear()} Porter Yen · 軟體架構與人文設計的結合</p>
        <p style={{ fontSize: '0.7rem', color: 'rgba(224,216,203,0.15)' }}>Designed & Built by Porter</p>
      </footer>

    </div>
  );
};

export default ProfileLanding;
