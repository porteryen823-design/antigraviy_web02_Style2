// 全域功能模組

// 淡入動畫觀察器
class FadeInObserver {
  constructor() {
    this.observer = null;
    this.init();
  }

  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    // 檢查是否支援 IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      // 不支援則直接顯示所有元素
      document.querySelectorAll('.fade-in-element').forEach(el => {
        el.style.opacity = '1';
      });
      return;
    }

    // 設定觀察器
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          this.observer.unobserve(entry.target);
        }
      });
    }, options);

    // 觀察所有需要淡入的元素
    document.querySelectorAll('.fade-in-element').forEach(el => {
      this.observer.observe(el);
    });
  }
}

// 圖片延遲載入
class LazyLoadImages {
  constructor() {
    this.init();
  }

  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    // 使用原生 loading="lazy" 屬性
    const images = document.querySelectorAll('img[data-src]');
    
    if ('loading' in HTMLImageElement.prototype) {
      images.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      });
    } else {
      // 降級方案：使用 IntersectionObserver
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }
  }
}

// 表單驗證
class FormValidator {
  constructor(formId) {
    this.form = document.getElementById(formId);
    if (this.form) {
      this.init();
    }
  }

  init() {
    this.form.addEventListener('submit', (e) => {
      if (!this.validate()) {
        e.preventDefault();
      }
    });

    // 即時驗證
    const inputs = this.form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        this.validateField(input);
      });
    });
  }

  validate() {
    let isValid = true;
    const inputs = this.form.querySelectorAll('input[required], textarea[required]');

    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });

    return isValid;
  }

  validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    // 必填檢查
    if (field.hasAttribute('required') && value === '') {
      isValid = false;
      errorMessage = '此欄位為必填';
    }

    // Email 格式檢查
    if (field.type === 'email' && value !== '') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = '請輸入有效的 Email 地址';
      }
    }

    // 顯示或隱藏錯誤訊息
    this.showError(field, isValid, errorMessage);
    return isValid;
  }

  showError(field, isValid, message) {
    const errorElement = field.nextElementSibling;

    if (!isValid) {
      field.classList.add('border-red-500');
      field.classList.remove('border-border');
      
      if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.textContent = message;
      } else {
        const error = document.createElement('p');
        error.className = 'error-message text-red-500 text-sm mt-1';
        error.textContent = message;
        field.parentNode.insertBefore(error, field.nextSibling);
      }
    } else {
      field.classList.remove('border-red-500');
      field.classList.add('border-border');
      
      if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.remove();
      }
    }
  }
}

// 回到頂部按鈕
class BackToTop {
  constructor() {
    this.button = null;
    this.init();
  }

  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    this.button = document.getElementById('back-to-top');
    if (!this.button) return;

    // 滾動時顯示/隱藏按鈕
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        this.button.classList.remove('hidden');
        this.button.classList.add('animate-fade-in');
      } else {
        this.button.classList.add('hidden');
      }
    });

    // 點擊回到頂部
    this.button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// 初始化所有功能
const fadeInObserver = new FadeInObserver();
const lazyLoadImages = new LazyLoadImages();
const backToTop = new BackToTop();

// 聯絡表單驗證（如果存在）
if (document.getElementById('contact-form')) {
  const contactFormValidator = new FormValidator('contact-form');
}

// 工具函數：防抖
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 工具函數：節流
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// 導出供其他模組使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    FadeInObserver,
    LazyLoadImages,
    FormValidator,
    BackToTop,
    debounce,
    throttle
  };
}
