import { motion } from 'framer-motion';

const cases = [
  {
    company: '優質零售',
    project: 'LINE 機器人服務整合',
    impact: '客戶互動率提升 50%',
    techs: ['LINE', 'Node.js', 'LIFF'],
  },
  {
    company: '優質電商',
    project: '高併發購物平台',
    impact: '承受 100k+ 同時在線',
    techs: ['Node.js', 'Redis', 'K8s'],
  },
  {
    company: '智慧企業',
    project: 'AI RAG 智能客服',
    impact: '人力成本降低 60%',
    techs: ['Python', 'RAG', 'Dify'],
  },
  {
    company: '泰坦科技',
    project: '自動化物流排程',
    impact: '成本降低 15%',
    techs: ['GA 演算法', 'React Flow'],
  },
];

const SuccessStories = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">客戶成功案例</h2>
            <p className="text-gray-600">我們已協助多家企業完成關鍵性的技術轉型計畫。</p>
          </div>
          <button className="text-primary font-bold hover:underline">查看所有案例 →</button>
        </div>

        <div className="flex overflow-x-auto pb-10 gap-8 scrollbar-hide">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-80 p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-secondary rounded-lg mb-6 flex items-center justify-center font-bold text-primary">
                Logo
              </div>
              <h4 className="text-gray-500 text-sm mb-2">{item.company}</h4>
              <h3 className="text-xl font-bold text-text-dark mb-4">{item.project}</h3>
              <p className="text-primary font-bold text-lg mb-6 leading-tight">{item.impact}</p>
              <div className="flex flex-wrap gap-2">
                {item.techs.map((t, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
