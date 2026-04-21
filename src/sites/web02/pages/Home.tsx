import Hero from '../components/sections/Hero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiLightningBolt, HiShieldCheck, HiOutlineCube } from 'react-icons/hi';
import { FaCode, FaRobot, FaDatabase, FaCogs } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      
      {/* Core Strengths */}
      <section className="py-24 bg-primary-dark relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">核心優勢</h2>
            <p className="text-steel-gray max-w-2xl mx-auto">
              我們結合深厚的工業背景與頂尖的軟體技術，為企業提供最可靠的轉型動力。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <HiLightningBolt className="text-4xl text-accent-cyan" />,
                title: '技術深度',
                desc: '10+ 年企業級軟體開發經驗，精通多種架構與前端後端技術。',
              },
              {
                icon: <HiShieldCheck className="text-4xl text-accent-emerald" />,
                title: '交付可靠',
                desc: '98% 項目準時交付率，嚴謹的測試流程確保系統上線穩定無虞。',
              },
              {
                icon: <HiOutlineCube className="text-4xl text-accent-amber" />,
                title: '持續創新',
                desc: '整合最新 AI 與自動化技術，讓您的系統具備未來的擴展性。',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="tech-card text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10 group-hover:border-accent-cyan transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-steel-gray leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-secondary-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-30" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-8 text-white">
                全方位的<span className="text-accent-cyan">技術儲備</span>
              </h2>
              <p className="text-steel-gray mb-8 text-lg leading-relaxed">
                我們不只開發軟體，更為您建構完整的數位生態。從前端極致體驗到後端高併發處理，從 AI 智能整合到自動化 DevOps 流程，Porter Studio 提供一站式技術支援。
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <FaCode />, label: '全端開發' },
                  { icon: <FaRobot />, label: 'AI RAG' },
                  { icon: <FaDatabase />, label: '數據整合' },
                  { icon: <FaCogs />, label: '自動工作流' },
                ].map((tag, i) => (
                  <div key={i} className="flex items-center gap-3 text-soft-white font-medium">
                    <span className="w-8 h-8 rounded bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
                      {tag.icon}
                    </span>
                    {tag.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'React', level: 95 },
                { name: 'Node.js', level: 90 },
                { name: '.NET Core', level: 85 },
                { name: 'Python/AI', level: 88 },
                { name: 'PostgreSQL', level: 92 },
                { name: 'Docker/K8s', level: 80 },
              ].map((skill, i) => (
                <div key={i} className="p-6 glass-card border-accent-cyan/10">
                  <div className="flex justify-between mb-2">
                    <span className="font-mono text-sm">{skill.name}</span>
                    <span className="text-accent-cyan text-xs">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full bg-accent-cyan"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="py-24 bg-primary-dark">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">成功案例</h2>
            <p className="text-steel-gray">我們協助不同產業的合作夥伴實現技術升級與效率提升。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                company: '全球連鎖零售廠商',
                title: 'LINE 機器人服務整合',
                impact: '客戶互動率提升 50%',
                tags: ['LINE', 'Node.js', 'PostgreSQL'],
                image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop'
              },
              {
                company: '全球連鎖零售商',
                title: 'AI 智能客服',
                impact: '客服人力節省 60%',
                tags: ['RAG', 'Python', 'React'],
                image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop'
              },
              {
                company: '精密機械組裝',
                title: '智慧排程系統',
                impact: '交期延遲減少 85%',
                tags: ['Algorithm', 'Node.js', 'ECharts'],
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop'
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group relative h-96 rounded-2xl overflow-hidden border border-white/10"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent p-8 flex flex-col justify-end">
                  <div className="text-accent-cyan text-sm font-bold mb-2">{item.company}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <div className="text-accent-emerald text-lg font-orbitron mb-4">{item.impact}</div>
                  <div className="flex gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 bg-white/10 rounded text-steel-gray">#{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="glass-card p-12 md:p-20 text-center border-accent-cyan/20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/5 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-emerald/5 rounded-full blur-3xl -ml-32 -mb-32" />
            
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-8 text-white">
              準備好啟動您的<span className="text-accent-cyan">數位轉型</span>？
            </h2>
            <p className="text-steel-gray mb-10 text-lg max-w-2xl mx-auto">
              無論您是需要 LINE 機器人開發、AI 知識庫建置，還是高性能 Web 應用開發，Porter Studio 都是您的首選技術夥伴。
            </p>
            <Link to="/web02/contact" className="btn-primary">
              取得專屬報價
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
