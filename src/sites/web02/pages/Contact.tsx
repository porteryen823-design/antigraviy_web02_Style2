import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { HiMail, HiPhone, HiLocationMarker, HiClock, HiInformationCircle, HiX } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { COMPANY, SOCIAL_LINKS, CONTACT_SERVICE_OPTIONS, BUDGET_OPTIONS } from '../config/content';

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  budget: string;
};

const DemoNotice = ({ onClose }: { onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: -16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    className="fixed top-24 left-1/2 -translate-x-1/2 z-50 flex items-start gap-3 bg-secondary-dark border border-accent-cyan/40 rounded-xl px-6 py-4 shadow-lg shadow-accent-cyan/10 max-w-sm w-full mx-4"
  >
    <HiInformationCircle className="text-accent-cyan text-2xl shrink-0 mt-0.5" />
    <div className="flex-1">
      <p className="text-soft-white font-bold text-sm">Demo 功能提示</p>
      <p className="text-steel-gray text-sm mt-0.5">目前為 Demo 功能，尚未實作</p>
    </div>
    <button onClick={onClose} className="text-steel-gray hover:text-white transition-colors">
      <HiX className="text-lg" />
    </button>
  </motion.div>
);

const Contact = () => {
  const [showDemo, setShowDemo] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (_data: FormData) => {
    setShowDemo(true);
    setTimeout(() => setShowDemo(false), 4000);
  };

  const contactItems = [
    { icon: <HiLocationMarker />, title: '地址', content: COMPANY.address, href: undefined },
    { icon: <HiMail />, title: '電子郵件', content: COMPANY.email, href: COMPANY.emailHref },
    { icon: <HiPhone />, title: '電話', content: COMPANY.phone, href: COMPANY.phoneHref },
    { icon: <HiClock />, title: '營業時間', content: COMPANY.hours, href: undefined },
  ];

  return (
    <div className="pt-32 pb-24">
      <AnimatePresence>
        {showDemo && <DemoNotice onClose={() => setShowDemo(false)} />}
      </AnimatePresence>

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl md:text-6xl font-orbitron font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            聯絡<span className="text-accent-cyan">我們</span>
          </motion.h1>
          <p className="text-soft-white/80 text-lg max-w-2xl mx-auto">
            讓我們一起探討您的技術需求，打造改變產業的軟體解決方案。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-12 order-2 lg:order-1">
            <div className="glass-card p-10 border-accent-cyan/10">
              <h3 className="text-2xl font-bold mb-8 text-white">聯繫資訊</h3>
              <div className="space-y-6">
                {contactItems.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-2xl text-accent-cyan mt-1">{item.icon}</div>
                    <div>
                      <div className="text-soft-white font-bold">{item.title}</div>
                      {item.href ? (
                        <a href={item.href} className="text-steel-gray hover:text-accent-cyan transition-colors">
                          {item.content}
                        </a>
                      ) : (
                        <div className="text-steel-gray">{item.content}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <div className="text-soft-white font-bold mb-4">關注我們</div>
                <div className="flex gap-4">
                  {([
                    { icon: <FaLinkedin />, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
                    { icon: <FaGithub />, href: SOCIAL_LINKS.github, label: 'GitHub' },
                    { icon: <FaFacebook />, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
                  ]).map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl text-steel-gray hover:text-accent-cyan hover:border-accent-cyan transition-all"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="h-80 rounded-2xl overflow-hidden border border-white/10 relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.8845864115165!2d120.97893122584102!3d24.800040401511215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346835de7002030d%3A0x67905f87b8979c1!2zMzAw5paw56u55biC5p2x5Y2A5YWs5ZyS6LevMTQy6Jmf!5e0!3m2!1szh-TW!2stw!4v1713444000000!5m2!1szh-TW!2stw"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.5) contrast(1.2) brightness(0.8)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-10 border-accent-cyan/20 order-1 lg:order-2">
            <h3 className="text-2xl font-bold mb-8 text-white">專案諮詢</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-soft-white/60">姓名 *</label>
                  <input
                    {...register("name", { required: true })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-accent-cyan transition-all text-soft-white"
                    placeholder="您的稱呼"
                  />
                  {errors.name && <span className="text-xs text-red-500">必填欄位</span>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-soft-white/60">公司名稱</label>
                  <input
                    {...register("company")}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-accent-cyan transition-all text-soft-white"
                    placeholder="公司單位"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-soft-white/60">電子郵件 *</label>
                  <input
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-accent-cyan transition-all text-soft-white"
                    placeholder="example@mail.com"
                  />
                  {errors.email && <span className="text-xs text-red-500">請輸入正確信箱格式</span>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-soft-white/60">聯絡電話</label>
                  <input
                    {...register("phone")}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-accent-cyan transition-all text-soft-white"
                    placeholder="09XX-XXX-XXX"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-soft-white/60">服務類型 *</label>
                <select
                  {...register("service", { required: true })}
                  className="w-full bg-secondary-dark border border-white/10 rounded-lg p-3 outline-none focus:border-accent-cyan transition-all appearance-none text-soft-white"
                >
                  <option value="">請選擇服務</option>
                  {CONTACT_SERVICE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                {errors.service && <span className="text-xs text-red-500">請選擇一項服務</span>}
              </div>

              <div className="space-y-2">
                <label className="text-sm text-soft-white/60">項目描述 *</label>
                <textarea
                  {...register("message", { required: true })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 h-32 outline-none focus:border-accent-cyan transition-all resize-none text-soft-white"
                  placeholder="請簡述您的需求..."
                />
                {errors.message && <span className="text-xs text-red-500">必填欄位</span>}
              </div>

              <div className="space-y-2">
                <label className="text-sm text-soft-white/60">預算範圍</label>
                <div className="grid grid-cols-2 gap-3">
                  {BUDGET_OPTIONS.map(b => (
                    <label key={b} className="flex items-center gap-2 p-3 bg-white/5 rounded border border-white/10 cursor-pointer hover:bg-white/10 transition-all">
                      <input type="radio" value={b} {...register("budget")} className="sr-only peer" />
                      <div className="w-4 h-4 rounded-full border border-steel-gray peer-checked:bg-accent-cyan peer-checked:border-accent-cyan transition-all shrink-0" />
                      <span className="text-sm text-soft-white/80">{b}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button type="submit" className="w-full btn-primary py-4 text-lg mt-4">
                送出諮詢申請
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
