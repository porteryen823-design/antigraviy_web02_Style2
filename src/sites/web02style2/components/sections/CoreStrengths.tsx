import { motion } from 'framer-motion';
import { HiCode, HiShieldCheck, HiOutlineLightBulb } from 'react-icons/hi';

const strengths = [
  {
    icon: <HiCode />,
    title: '技術深度',
    desc: '10+ 年企業級軟體開發經驗，精通多種技術棧。',
  },
  {
    icon: <HiShieldCheck />,
    title: '交付可靠',
    desc: '98% 項目準時交付率，嚴謹的測試與佈署流程。',
  },
  {
    icon: <HiOutlineLightBulb />,
    title: '持續創新',
    desc: '整合最新 AI 與自動化技術，保持領先競爭力。',
  },
];

const CoreStrengths = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">為什麼選擇我們？</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {strengths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-10 rounded-2xl bg-secondary/30 border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-primary text-white rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-text-dark mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreStrengths;
