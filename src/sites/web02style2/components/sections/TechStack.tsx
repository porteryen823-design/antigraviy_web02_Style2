import { motion } from 'framer-motion';
import { FaServer, FaCode, FaBrain, FaCogs } from 'react-icons/fa';

const techGroups = [
  {
    title: '後端開發',
    icon: <FaServer />,
    items: ['API 設計', '.NET Core', 'Node.js', 'Go'],
    color: 'bg-blue-500',
  },
  {
    title: '前端開發',
    icon: <FaCode />,
    items: ['React / Vue', 'Vite', 'Tailwind', 'Three.js'],
    color: 'bg-green-500',
  },
  {
    title: 'AI / ML',
    icon: <FaBrain />,
    items: ['RAG 系統', 'LangChain', 'OpenAI', 'LLM 優化'],
    color: 'bg-purple-500',
  },
  {
    title: 'DevOps',
    icon: <FaCogs />,
    items: ['CI / CD', 'Docker', 'K8s', 'Azure / AWS'],
    color: 'bg-orange-500',
  },
];

const TechStack = () => {
  return (
    <section className="py-24 bg-text-dark text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">全方位技術棧</h2>
          <p className="text-gray-400">從前端互動到後端架構，我們提供完整的數位解決方案。</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {techGroups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className={`w-20 h-20 rounded-full ${group.color} flex items-center justify-center text-3xl mb-6 shadow-lg shadow-${group.color}/20`}>
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold mb-6">{group.title}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {group.items.map((tech, tIndex) => (
                    <span 
                      key={tIndex}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-primary/20 hover:border-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
