import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import ParticlesBackground from '../common/ParticlesBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Particles Background */}
      <ParticlesBackground />
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-emerald/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 md:px-8 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block px-4 py-1 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 text-accent-cyan text-sm font-medium mb-6 tracking-widest uppercase"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Digital Transformation Engine
          </motion.span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold text-white mb-6 leading-tight">
            驅動企業數位轉型的<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-emerald to-accent-cyan animate-gradient-x bg-[length:200%_auto]">
              技術引擎
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-steel-gray mb-12 max-w-3xl mx-auto leading-relaxed">
            專業軟體開發 | 智能系統整合 | AI 解決方案<br />
            為您的企業打造高效、穩定、前衛的數位基座
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/web02/contact" className="btn-primary flex items-center justify-center gap-2 group">
              立即開啟合作 <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/web02/services" className="btn-outline">
              探索開發領域
            </Link>
          </div>
        </motion.div>

        {/* Stats overlay or secondary element could go here */}
        <motion.div 
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {[
            { label: '交付率', value: '98%' },
            { label: '實踐項目', value: '150+' },
            { label: '技術成員', value: '50+' },
            { label: '企業客戶', value: '30+' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-orbitron font-bold text-accent-cyan mb-1">{stat.value}</div>
              <div className="text-sm text-steel-gray uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent" />
    </section>
  );
};

export default Hero;
