// 導航功能模組
class Navigation {
  constructor() {
    this.nav = null;
    this.mobileMenuBtn = null;
    this.mobileMenu = null;
    this.navLinks = null;
    this.init();
  }

  init() {
    // 等待 DOM 載入完成
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    this.nav = document.querySelector('nav');
    this.mobileMenuBtn = document.getElementById('mobile-menu-btn');
    this.mobileMenu = document.getElementById('mobile-menu');
    this.navLinks = document.querySelectorAll('.nav-link');

    // 設定事件監聽器
    this.setupScrollEffect();
    this.setupMobileMenu();
    this.setupActiveLink();
    this.setupSmoothScroll();
  }

  // 滾動時導航列效果
  setupScrollEffect() {
    if (!this.nav) return;

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      // 添加背景模糊效果
      if (currentScroll > 50) {
        this.nav.classList.add('backdrop-blur-md', 'bg-white/90', 'shadow-soft');
      } else {
        this.nav.classList.remove('backdrop-blur-md', 'bg-white/90', 'shadow-soft');
      }

      lastScroll = currentScroll;
    });
  }

  // 手機版選單
  setupMobileMenu() {
    if (!this.mobileMenuBtn || !this.mobileMenu) return;

    this.mobileMenuBtn.addEventListener('click', () => {
      const isOpen = this.mobileMenu.classList.contains('hidden');
      
      if (isOpen) {
        this.mobileMenu.classList.remove('hidden');
        this.mobileMenu.classList.add('animate-slide-down');
        this.mobileMenuBtn.setAttribute('aria-expanded', 'true');
      } else {
        this.mobileMenu.classList.add('hidden');
        this.mobileMenu.classList.remove('animate-slide-down');
        this.mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // 點擊連結後關閉選單
    const mobileLinks = this.mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.mobileMenu.classList.add('hidden');
        this.mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // ESC 鍵關閉選單
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.mobileMenu.classList.contains('hidden')) {
        this.mobileMenu.classList.add('hidden');
        this.mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 當前頁面連結高亮
  setupActiveLink() {
    if (!this.navLinks) return;

    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';

    this.navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');
      if (linkPath === currentPage || (currentPage === '' && linkPath === 'index.html')) {
        link.classList.add('text-primary', 'font-semibold');
      }
    });
  }

  // 平滑滾動
  setupSmoothScroll() {
    // 針對錨點連結的平滑滾動
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          const offsetTop = target.offsetTop - 80; // 導航列高度
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}

// 初始化導航
const navigation = new Navigation();

// 導出供其他模組使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Navigation;
}
