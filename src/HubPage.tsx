import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getAssetPath } from './lib/assetPath';

interface SiteCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  badgeColor: string;
  path: string;
  accentColor: string;
  glowColor: string;
  tags: string[];
  preview: string;
  icon: string;
}

const sites: SiteCard[] = [
  {
    id: 'web01',
    title: '山林居',
    subtitle: '南投高山民宿',
    description: '遠離塵囂，在群山懷抱中找回心靈的寧靜。精選客房、周邊景點與交通指引，開啟您專屬的山間之旅。',
    badge: 'web01',
    badgeColor: '#A77A50',
    path: '/web01',
    accentColor: '#386641',
    glowColor: 'rgba(56,102,65,0.3)',
    tags: ['民宿預訂', '景點導覽', '交通資訊'],
    preview: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop',
    icon: '🏔️',
  },
  {
    id: 'web02',
    title: 'Porter AI Tech',
    subtitle: '企業數位轉型夥伴 v1',
    description: '深色科技感 UI 設計，展示 MES 系統、AI RAG 知識庫與全端開發服務，搭配 ECharts 數據視覺化。',
    badge: 'web02',
    badgeColor: '#00d9ff',
    path: '/web02',
    accentColor: '#00d9ff',
    glowColor: 'rgba(0,217,255,0.2)',
    tags: ['MES 系統', 'AI 整合', 'Web 開發'],
    preview: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    icon: '⚡',
  },
  {
    id: 'web02-style2',
    title: 'Porter AI Studio',
    subtitle: '企業數位轉型夥伴 v2',
    description: '清新自然風格設計，以粒子動畫為背景，展示核心技術優勢、客戶成功案例與技術棧。精緻動態互動體驗。',
    badge: 'web02-style2',
    badgeColor: '#4a8555',
    path: '/web02-style2',
    accentColor: '#4a8555',
    glowColor: 'rgba(56,102,65,0.25)',
    tags: ['粒子特效', 'framer-motion', '聯絡表單'],
    preview: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    icon: '🚀',
  },
  {
    id: 'coffee-shop',
    title: '萃 ‧ 光陰',
    subtitle: 'Essence Coffee',
    description: '日系文藝風格咖啡廳網站。沉穩深色調設計，展示匠心烘焙的咖啡與精緻手作甜點，營造靜謐午後時光。',
    badge: 'NEW',
    badgeColor: '#A77A50',
    path: '/coffee-shop',
    accentColor: '#A77A50',
    glowColor: 'rgba(167,122,80,0.3)',
    tags: ['日系風格', '咖啡文化', '靜態頁面'],
    preview: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop',
    icon: '☕',
  },
  {
    id: 'city-coffee',
    title: 'Porter Coffee',
    subtitle: '都市咖啡館',
    description: '溫暖米色文青風格。TailwindCSS 打造的現代化網頁，包含完整關於我們、菜單與閱讀空間介紹。',
    badge: 'NEW',
    badgeColor: '#6B4226',
    path: '/city-coffee',
    accentColor: '#6B4226',
    glowColor: 'rgba(107,66,38,0.3)',
    tags: ['TailwindCSS', '城市生活', '現代簡約'],
    preview: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop',
    icon: '🏙️',
  },
  {
    id: 'profile',
    title: 'Porter Senior Architect',
    subtitle: '30 年軟體工程實踐者',
    description: 'MES 系統與企業數位轉型，整合 AI 機器人與 RAG 知識庫系統，致力於打造穩定且創新的工業級解決方案。',
    badge: 'PERSONAL',
    badgeColor: '#4cc9f0',
    path: '/profile',
    accentColor: '#4cc9f0',
    glowColor: 'rgba(76,201,240,0.3)',
    tags: ['30年經驗', 'MES 系統', 'AI 機器人', 'RAG 系統', '軟體架構/程式設計', '系統整合'],
    preview: '/sites/profile/porter_avatar.png',
    icon: '👤',
  },
];

const HubPage = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0e1a 0%, #151923 50%, #0d1520 100%)',
      color: '#f0f4f8',
      fontFamily: "'Inter', 'Noto Sans TC', sans-serif",
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(0,217,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.03) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        pointerEvents: 'none',
      }} />

      {/* Glow Orbs */}
      <div style={{
        position: 'absolute', top: '-200px', left: '-200px',
        width: '500px', height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,217,255,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-200px', right: '-200px',
        width: '600px', height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56,102,65,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, padding: '4rem 1.5rem 6rem' }}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <div style={{
              width: '5rem', height: '5rem',
              background: 'linear-gradient(135deg, #00d9ff, #00ff9d)',
              borderRadius: '1.25rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 40px rgba(0,217,255,0.4)',
              fontSize: '2.25rem', fontWeight: 900,
              color: '#0a0e1a',
            }}>
              A
            </div>
          </div>

          <div style={{
            display: 'inline-block',
            background: 'rgba(0,217,255,0.08)',
            border: '1px solid rgba(0,217,255,0.2)',
            borderRadius: '9999px',
            padding: '0.3rem 1rem',
            fontSize: '0.75rem',
            fontWeight: 700,
            color: '#00d9ff',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            AI × Porter
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.75rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: '1.25rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #00d9ff 50%, #00ff9d 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Web 作品集入口(展示用)
          </h1>

          <p style={{
            fontSize: '1.1rem',
            color: '#8892a6',
            maxWidth: '36rem',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            多款獨立設計的 Web 應用，每一款都展現不同的設計語言與技術棧。點選卡片進入各個網站。
          </p>
        </motion.div>

        {/* Site Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {sites.map((site, i) => (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
            >
              <Link to={site.path} style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{
                  background: 'rgba(21,25,35,0.8)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.3s ease',
                  boxShadow: `0 4px 30px ${site.glowColor}`,
                  cursor: 'pointer',
                }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.border = `1px solid ${site.accentColor}50`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${site.glowColor}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.border = '1px solid rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 30px ${site.glowColor}`;
                  }}
                >
                  {/* Preview Image */}
                  <div style={{ position: 'relative', height: '14rem', overflow: 'hidden' }}>
                    <img
                      src={getAssetPath(site.preview)}
                      alt={site.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
                    />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(10,14,26,0.85) 0%, transparent 60%)',
                    }} />
                    {/* Badge */}
                    <div style={{
                      position: 'absolute', top: '1rem', left: '1rem',
                      background: 'rgba(10,14,26,0.7)',
                      backdropFilter: 'blur(8px)',
                      border: `1px solid ${site.badgeColor}40`,
                      borderRadius: '9999px',
                      padding: '0.25rem 0.75rem',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      color: site.badgeColor,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}>
                      {site.badge}
                    </div>
                    {/* Icon */}
                    <div style={{
                      position: 'absolute', bottom: '1rem', right: '1rem',
                      fontSize: '2rem',
                      filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))',
                    }}>
                      {site.icon}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: '1.75rem' }}>
                    <div style={{ marginBottom: '0.375rem' }}>
                      <span style={{
                        fontSize: '0.75rem', fontWeight: 600,
                        color: site.accentColor, letterSpacing: '0.05em',
                      }}>
                        {site.subtitle}
                      </span>
                    </div>
                    <h2 style={{
                      fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem',
                      color: '#ffffff', letterSpacing: '-0.01em',
                    }}>
                      {site.title}
                    </h2>
                    <p style={{
                      fontSize: '0.875rem', color: '#8892a6',
                      lineHeight: 1.7, marginBottom: '1.25rem',
                    }}>
                      {site.description}
                    </p>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      {site.tags.map((tag) => (
                        <span key={tag} style={{
                          fontSize: '0.6875rem', fontWeight: 600,
                          background: `${site.accentColor}15`,
                          color: site.accentColor,
                          borderRadius: '0.375rem',
                          padding: '0.25rem 0.625rem',
                          letterSpacing: '0.03em',
                        }}>
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <span style={{
                        fontSize: '0.875rem', fontWeight: 700, color: site.accentColor,
                        letterSpacing: '0.03em',
                      }}>
                        進入網站
                      </span>
                      <span style={{
                        width: '2.25rem', height: '2.25rem',
                        borderRadius: '9999px',
                        background: `${site.accentColor}20`,
                        border: `1px solid ${site.accentColor}40`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: site.accentColor, fontSize: '1rem',
                        transition: 'all 0.2s',
                      }}>
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: '5rem', color: '#8892a6', fontSize: '0.8rem' }}
        >
          <p>© {new Date().getFullYear()}  AI & Porter · 多站整合平台</p>
          <div style={{ marginTop: '0.75rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            {sites.map((s) => (
              <Link key={s.id} to={s.path} style={{ color: s.accentColor, textDecoration: 'none', fontSize: '0.8rem', opacity: 0.7 }}>
                {s.title}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HubPage;
