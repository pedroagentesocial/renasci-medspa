// Sistema de traducción dinámico
const dict = {
  es: {
    // Navigation
    nav: {
      home: "Inicio",
      services: "Servicios",
      membership: "Membresía",
      about: "Nosotros",
      contact: "Contacto"
    },
    // CTAs and buttons
    cta: {
      book_now: "Agendar Ahora",
      learn_more: "Conoce Más",
      view_services: "Ver Servicios",
      get_started: "Comenzar",
      contact_us: "Contáctanos",
      back_home: "Volver al Inicio",
      send: "Enviar",
      schedule: "Agendar",
      select_plan: "Seleccionar Plan"
    },
    // Footer
    footer: {
      contact_title: "Contáctanos",
      social_title: "Síguenos",
      follow_us: "Síguenos",
      privacy: "Privacidad",
      terms: "Términos",
      copyright: "© 2024 Renasci Medical Spa. Todos los derechos reservados.",
      address: "Utah, Estados Unidos",
      phone: "+1 (000) 000-0000",
      email: "info@renasci.com"
    },
    // Forms
    form: {
      name: "Nombre",
      phone: "Teléfono",
      email: "Email",
      message: "Mensaje",
      service: "Servicio de interés",
      required: "Campo requerido"
    },
    // Common
    common: {
      loading: "Cargando...",
      error: "Error",
      success: "Éxito",
      coming_soon: "Próximamente",
      best_value: "Mejor Valor",
      popular: "Popular",
      from: "Desde",
      per_session: "por sesión",
      per_month: "por mes"
    },
    // Pages
    pages: {
      home_title: "Renasci Medical Spa - Tratamientos Estéticos Avanzados",
      services_title: "Nuestros Servicios - Renasci Medical Spa",
      membership_title: "Membresías - Renasci Medical Spa",
      not_found: "Página no encontrada",
      server_error: "Error del servidor"
    }
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      services: "Services",
      membership: "Membership",
      about: "About",
      contact: "Contact"
    },
    // CTAs and buttons
    cta: {
      book_now: "Book Now",
      learn_more: "Learn More",
      view_services: "View Services",
      get_started: "Get Started",
      contact_us: "Contact Us",
      back_home: "Back to Home",
      send: "Send",
      schedule: "Schedule",
      select_plan: "Select Plan"
    },
    // Footer
    footer: {
      contact_title: "Contact Us",
      social_title: "Follow Us",
      follow_us: "Follow Us",
      privacy: "Privacy",
      terms: "Terms",
      copyright: "© 2024 Renasci Medical Spa. All rights reserved.",
      address: "Utah, United States",
      phone: "+1 (000) 000-0000",
      email: "info@renasci.com"
    },
    // Forms
    form: {
      name: "Name",
      phone: "Phone",
      email: "Email",
      message: "Message",
      service: "Service of interest",
      required: "Required field"
    },
    // Common
    common: {
      loading: "Loading...",
      error: "Error",
      success: "Success",
      coming_soon: "Coming Soon",
      best_value: "Best Value",
      popular: "Popular",
      from: "From",
      per_session: "per session",
      per_month: "per month"
    },
    // Pages
    pages: {
      home_title: "Renasci Medical Spa - Advanced Aesthetic Treatments",
      services_title: "Our Services - Renasci Medical Spa",
      membership_title: "Memberships - Renasci Medical Spa",
      not_found: "Page not found",
      server_error: "Server error"
    }
  }
};

class I18nManager {
  constructor() {
    this.currentLang = this.getStoredLanguage() || 'es';
    this.init();
  }

  init() {
    // Aplicar idioma guardado al cargar la página
    this.applyTranslations(this.currentLang);
    
    // Actualizar el selector de idioma
    this.updateLanguageSwitcher();
  }

  getStoredLanguage() {
    return localStorage.getItem('renasci-language');
  }

  setStoredLanguage(lang) {
    localStorage.setItem('renasci-language', lang);
  }

  switchLanguage(newLang) {
    if (newLang === this.currentLang) return;
    
    this.currentLang = newLang;
    this.setStoredLanguage(newLang);
    this.applyTranslations(newLang);
    this.updateLanguageSwitcher();
    
    // Disparar evento personalizado para otros componentes
    window.dispatchEvent(new CustomEvent('languageChanged', { 
      detail: { language: newLang } 
    }));
  }

  getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  }

  applyTranslations(lang) {
    const translations = dict[lang];
    if (!translations) return;

    // Buscar todos los elementos con data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.getNestedValue(translations, key);
      
      if (translation) {
        // Verificar si es un input placeholder
        if (element.hasAttribute('placeholder')) {
          element.setAttribute('placeholder', translation);
        } else {
          element.textContent = translation;
        }
      }
    });

    // Actualizar el título de la página si existe
    const titleElement = document.querySelector('title');
    if (titleElement && titleElement.hasAttribute('data-i18n')) {
      const titleKey = titleElement.getAttribute('data-i18n');
      const titleTranslation = this.getNestedValue(translations, titleKey);
      if (titleTranslation) {
        titleElement.textContent = titleTranslation;
      }
    }

    // Actualizar el atributo lang del documento
    document.documentElement.lang = lang;
  }

  updateLanguageSwitcher() {
    // Actualizar el texto del botón del selector de idioma
    const currentLangButton = document.querySelector('.language-switcher-button');
    if (currentLangButton) {
      const flagSpan = currentLangButton.querySelector('.flag');
      const textSpan = currentLangButton.querySelector('.lang-text');
      
      if (this.currentLang === 'es') {
        if (flagSpan) flagSpan.textContent = '🇪🇸';
        if (textSpan) textSpan.textContent = 'ES';
      } else {
        if (flagSpan) flagSpan.textContent = '🇺🇸';
        if (textSpan) textSpan.textContent = 'EN';
      }
    }

    // Actualizar el estado activo en las opciones del dropdown
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
      const optionLang = option.getAttribute('data-lang');
      if (optionLang === this.currentLang) {
        option.classList.add('active');
      } else {
        option.classList.remove('active');
      }
    });
  }

  getCurrentLanguage() {
    return this.currentLang;
  }
}

// Inicializar el gestor de idiomas cuando el DOM esté listo
let i18nManager;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    i18nManager = new I18nManager();
  });
} else {
  i18nManager = new I18nManager();
}

// Exportar para uso global
window.i18nManager = i18nManager;