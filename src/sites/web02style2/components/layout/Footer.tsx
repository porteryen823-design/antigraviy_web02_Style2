import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaFacebook, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-text-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold font-heading">
                Porter AI <span className="text-accent">Studio</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              專業軟體開發與數位轉型專家，為企業提供最可靠的技術引擎。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <FaGithub />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">快速連結</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/web02-style2" className="hover:text-primary transition-colors">首頁</Link></li>
              <li><Link to="/web02-style2/services" className="hover:text-primary transition-colors">服務項目</Link></li>
              <li><Link to="/web02-style2/faq" className="hover:text-primary transition-colors">常見問題</Link></li>
              <li><Link to="/web02-style2/contact" className="hover:text-primary transition-colors">聯絡我們</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">技術服務</h4>
            <ul className="space-y-4 text-gray-400">
              <li>MES 設計開發</li>
              <li>排程系統規劃</li>
              <li>AI RAG 系統建置</li>
              <li>高併發 API 開發</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">聯絡資訊</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-primary" />
                <span>新竹市公園路142號</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-primary" />
                <span>+886-936891502</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-primary" />
                <span>porteryen@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 Porter AI Inc. 版權所有</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">隱私權政策</a>
            <a href="#" className="hover:text-white transition-colors">服務條款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
