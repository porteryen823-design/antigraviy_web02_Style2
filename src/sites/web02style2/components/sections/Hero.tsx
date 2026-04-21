import { motion } from 'framer-motion';
import ParticlesBg from './ParticlesBg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-secondary">
      <ParticlesBg />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-text-dark leading-tight mb-6">
              驅動企業
              <span className="text-primary"> 數位轉型 </span>
              的技術引擎
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed font-body"
          >
            專業軟體開發 | 智能系統整合 | AI 解決方案
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link 
              to="/web02-style2/contact" 
              className="bg-primary text-white text-center px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all transform hover:-translate-y-1"
            >
              免費諮詢服務
            </Link>
            <Link 
              to="/web02-style2/services" 
              className="bg-white text-primary text-center border-2 border-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
            >
              查看解決方案
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Hero;
