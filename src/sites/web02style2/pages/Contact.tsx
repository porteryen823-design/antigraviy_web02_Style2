import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const contactSchema = z.object({
  name: z.string().min(2, { message: '請輸入完整姓名' }),
  company: z.string().optional(),
  email: z.string().email({ message: '無效的電子郵件格式' }),
  phone: z.string().min(8, { message: '請輸入聯絡電話' }),
  service: z.string({ required_error: '請選擇服務類型' }),
  message: z.string().min(10, { message: '請輸入至少 10 個字的項目描述' }),
  budget: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    console.log(data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert('感謝您的諮詢，我們將盡快聯繫您！');
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Contact Form */}
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-bold mb-8 font-heading">開始您的項目</h1>
            <p className="text-gray-600 mb-10 max-w-xl">
              填寫下方表單，我們的技術顧問將根據您的需求提供初步估算與建議。
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">姓名 *</label>
                  <input
                    {...register('name')}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-primary/20 focus:outline-none`}
                    placeholder="您的稱呼"
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">公司名稱</label>
                  <input
                    {...register('company')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:outline-none"
                    placeholder="公司名稱 (選填)"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">電子郵件 *</label>
                  <input
                    {...register('email')}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-primary/20 focus:outline-none`}
                    placeholder="example@company.com"
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">電話 *</label>
                  <input
                    {...register('phone')}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-primary/20 focus:outline-none`}
                    placeholder="聯絡電話"
                  />
                  {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">服務類型 *</label>
                  <select
                    {...register('service')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:outline-none bg-white"
                  >
                    <option value="">請選擇...</option>
                    <option value="mes">MES 設計開發</option>
                    <option value="web">網頁設計</option>
                    <option value="aps">排程系統</option>
                    <option value="api">後端 API</option>
                    <option value="rag">AI RAG 系統</option>
                    <option value="workflow">工作流開發</option>
                    <option value="consult">諮詢服務</option>
                  </select>
                  {errors.service && <span className="text-red-500 text-xs mt-1">{errors.service.message}</span>}
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">預算範圍</label>
                  <select
                    {...register('budget')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:outline-none bg-white"
                  >
                    <option value="unknown">尚未確定</option>
                    <option value="below_50">&lt; 50 萬</option>
                    <option value="50_100">50 - 100 萬</option>
                    <option value="100_300">100 - 300 萬</option>
                    <option value="above_300">&gt; 300 萬</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">項目描述 *</label>
                <textarea
                  {...register('message')}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-primary/20 focus:outline-none`}
                  placeholder="請簡述您的需求、目前的瓶頸或期望達成的目標..."
                ></textarea>
                {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>}
              </div>

              <button
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all disabled:opacity-50"
              >
                {isSubmitting ? '送出中...' : '提交諮詢項目'}
              </button>
            </form>
          </div>

          {/* Right: Contact Info & Map */}
          <div className="lg:w-1/3 space-y-10">
            <div className="bg-secondary/30 p-10 rounded-3xl border border-primary/5">
              <h3 className="text-2xl font-bold mb-8">聯絡資訊</h3>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="font-bold">地址</p>
                    <p className="text-gray-600">新竹市公園路142號</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="font-bold">電話</p>
                    <p className="text-gray-600">+886-936891502</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="text-gray-600">porteryen@gmail.com</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm">
                    <FaClock />
                  </div>
                  <div>
                    <p className="font-bold">營業時間</p>
                    <p className="text-gray-600">週一至週五 09:00 - 18:00</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="h-80 bg-gray-100 rounded-3xl overflow-hidden shadow-inner border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.8845864115165!2d120.97893122584102!3d24.800040401511215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346835de7002030d%3A0x67905f87b8979c1!2zMzAw5paw56u55biC5p2x5Y2A5YWs5ZyS6LevMTQy6Jmf!5e0!3m2!1szh-TW!2stw!4v1713444000000!5m2!1szh-TW!2stw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
