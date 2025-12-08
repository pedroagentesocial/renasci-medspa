class I18nManager {
  constructor() {
    this.currentLang = this.resolveInitialLang();
    document.documentElement.lang = this.currentLang;
    this.updateLanguageSwitcher();
    window.addEventListener('languageChanged', (e) => {
      const lang = e?.detail?.language || this.currentLang;
      this.switchLanguage(lang);
    });
  }
  resolveInitialLang() {
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    if (urlLang === 'en' || urlLang === 'es') return urlLang;
    const saved = localStorage.getItem('language') || localStorage.getItem('renasci-language');
    if (saved === 'en' || saved === 'es') return saved;
    const docLang = document.documentElement.lang;
    if (docLang === 'en' || docLang === 'es') return docLang;
    return 'es';
  }
  switchLanguage(lang) {
    this.currentLang = lang === 'en' ? 'en' : 'es';
    localStorage.setItem('language', this.currentLang);
    localStorage.setItem('renasci-language', this.currentLang);
    document.documentElement.lang = this.currentLang;
    this.updateLanguageSwitcher();
    const evt = new CustomEvent('languageChanged', { detail: { language: this.currentLang } });
    window.dispatchEvent(evt);
  }
  updateLanguageSwitcher() {
    const btn = document.querySelector('.language-switcher-button');
    if (btn) {
      const flag = btn.querySelector('.flag');
      const text = btn.querySelector('.lang-text');
      if (this.currentLang === 'es') {
        if (flag) flag.textContent = '🇪🇸';
        if (text) text.textContent = 'ES';
      } else {
        if (flag) flag.textContent = '🇺🇸';
        if (text) text.textContent = 'EN';
      }
    }
    const options = document.querySelectorAll('.lang-option');
    options.forEach((opt) => {
      const l = opt.getAttribute('data-lang');
      if (l === this.currentLang) opt.classList.add('active'); else opt.classList.remove('active');
    });
  }
  getCurrentLanguage() {
    return this.currentLang;
  }
}

let i18nManager;
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    i18nManager = new I18nManager();
    window.i18nManager = i18nManager;
  });
} else {
  i18nManager = new I18nManager();
  window.i18nManager = i18nManager;
}
