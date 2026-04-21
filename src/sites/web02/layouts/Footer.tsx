import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaFacebook, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { COMPANY, SOCIAL_LINKS, FOOTER_QUICK_LINKS, FOOTER_SERVICES } from '../config/content';

const Footer = () => {
  return (
    <footer className="bg-secondary-dark border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/web02" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-accent-cyan rounded flex items-center justify-center">
                <span className="text-primary-dark font-orbitron font-bold">P</span>
              </div>
              <span className="font-orbitron font-bold text-lg tracking-wider text-soft-white">
                {COMPANY.name}
              </span>
            </Link>
            <p className="text-steel-gray text-sm leading-relaxed">{COMPANY.description}</p>
            <div className="flex gap-4 text-xl">
              <a href={SOCIAL_LINKS.linkedin} aria-label="LinkedIn" className="text-steel-gray hover:text-accent-cyan transition-colors"><FaLinkedin /></a>
              <a href={SOCIAL_LINKS.github} aria-label="GitHub" className="text-steel-gray hover:text-accent-cyan transition-colors"><FaGithub /></a>
              <a href={SOCIAL_LINKS.facebook} aria-label="Facebook" className="text-steel-gray hover:text-accent-cyan transition-colors"><FaFacebook /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">快速連結</h4>
            <ul className="space-y-4 text-steel-gray">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-accent-cyan transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">技術服務</h4>
            <ul className="space-y-4 text-steel-gray">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">聯絡資訊</h4>
            <ul className="space-y-4 text-steel-gray text-sm">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-accent-cyan shrink-0" />
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-accent-cyan shrink-0" />
                <a href={COMPANY.phoneHref} className="hover:text-accent-cyan transition-colors">{COMPANY.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-accent-cyan shrink-0" />
                <a href={COMPANY.emailHref} className="hover:text-accent-cyan transition-colors">{COMPANY.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-steel-gray text-xs">
          <p>© {new Date().getFullYear()} {COMPANY.copyright}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
